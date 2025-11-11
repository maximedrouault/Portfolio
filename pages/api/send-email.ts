import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST requests are allowed',
    });
  }

  try {
    const { user_name, user_email, user_message } = req.body;

    // Validate input
    if (!user_name || !user_email || !user_message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'user_name, user_email, and user_message are required',
      });
    }

    // Get environment variables
    const serviceId = process.env.NEXT_PRIVATE_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PRIVATE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.NEXT_PRIVATE_EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error('Missing EmailJS configuration');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error',
        error: 'EmailJS credentials not configured',
      });
    }

    // Call EmailJS REST API with private key (secure server-to-server)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          user_name,
          user_email,
          user_message,
        },
        accessToken: privateKey,
      }),
    });

    let result;
    const contentType = response.headers.get('content-type');

    try {
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('EmailJS returned non-JSON:', text);
        result = { message: text };
      }
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
      result = { message: 'Unable to parse EmailJS response' };
    }

    if (!response.ok) {
      console.error('EmailJS API Error:', result);
      return res.status(response.status).json({
        success: false,
        message: 'Failed to send email',
        error: result.message || result.error || 'EmailJS API error',
      });
    }

    console.log('Email sent successfully:', result);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: errorMessage,
    });
  }
}
