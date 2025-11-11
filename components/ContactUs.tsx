import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import Alert from './Alerts';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    color: string;
    icon: string;
    message: string;
  } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: '  Votre message a été envoyé avec succès !',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message:
      "  Oops! Quelque chose s'est mal passé. Veuillez réessayer plus tard ou prendre contact directement à : MAXIMEDROUAULT@GMAIL.COM",
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      const formData = new FormData(form.current);
      const data = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        user_message: formData.get('user_message'),
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setAlert(successAlert);
        form.current.reset();
      } else {
        setAlert(errorAlert);
      }
    } catch (error) {
      console.error('Error:', error);
      setAlert(errorAlert);
    }
  };

  return (
    <section className="section section-lg section-shaped" id="contact-me">
      <form ref={form} onSubmit={sendEmail}>
        {alert && (
          <Alert
            color={alert.color}
            icon={alert.icon}
            message={alert.message}
          />
        )}
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Vous voulez travailler avec moi ?</h4>
                  <p className="mt-0">
                    Contactez-moi en utilisant le formulaire ci-dessous.
                  </p>
                  <FormGroup className={classnames('mt-5', {})}>
                    <InputGroup className="input-group-alternative">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                      <Input
                        placeholder="Votre nom"
                        type="text"
                        name="user_name"
                        required={true}
                        aria-label="Votre nom"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className={classnames({})}>
                    <InputGroup className="input-group-alternative">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                      <Input
                        placeholder="Votre adresse E-Mail"
                        name="user_email"
                        type="email"
                        required={true}
                        aria-label="Votre adresse E-Mail"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="user_message"
                      placeholder="Votre message..."
                      rows="4"
                      type="textarea"
                      required={true}
                      aria-label="Votre message"
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="submit"
                    >
                      Envoyez votre message
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </form>
    </section>
  );
};

export default ContactUs;
