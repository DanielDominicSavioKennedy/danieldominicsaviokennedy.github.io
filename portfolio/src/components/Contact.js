import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Contact.css'; // Import your CSS file

function Contact() {
    return (
        <div className="contact-me">
            <Container>
                <h2>Contact Me</h2>
                <Row>
                    <Col md={6}>
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p>Email: example@example.com</p>
                            <p>Phone: +1234567890</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-form">
                            <h3>Send a Message</h3>
                            {/* Your contact form goes here */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
