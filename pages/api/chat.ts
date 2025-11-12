import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  const apiKey: string = process.env.NEXT_PRIVATE_CHAT_API_KEY || '';
  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL || '';

  if (!apiKey || !backendUrl) {
    return res.status(500).json({
      error: 'Missing API configuration',
    });
  }

  const response = await fetch(`${backendUrl}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(req.body),
  });

  res.status(response.status);

  // Force streaming headers
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');

  for (const [name, value] of response.headers) {
    if (name !== 'content-type' && name !== 'cache-control' && name !== 'connection') {
      res.setHeader(name, value);
    }
  }

  if (response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        res.write(chunk);
      }
    } catch (error) {
      console.error('Streaming error:', error);
    }
  }

  res.end();
}
