import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container className="mt-5 pt-5">
      {/* Header */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold text-light">Contact Us</h2>
          <p className="text-white">
            We'd love to hear from you! Please fill out the form below or reach us directly.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Contact Form */}
        <Col md={7}>
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary" className="px-4">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Info */}
        <Col md={5}>
          <Card className="shadow-sm border-0 rounded-4 p-3 mb-4">
            <Card.Body>
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p><strong>Address:</strong><br />123 Education Street, Chakwal, Pakistan</p>
              <p><strong>Phone:</strong><br />+92 300 1234567</p>
              <p><strong>Email:</strong><br />info@parentconnect.pk</p>
            </Card.Body>
          </Card>

          {/* Map Section */}
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <iframe
              title="School Location"
              src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
