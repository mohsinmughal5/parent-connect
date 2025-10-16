import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaBookReader, FaChartLine, FaLightbulb } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="home-content text-light">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <Container className="position-relative">
          <h1 className="display-3 fw-bold">Guiding Students Toward Success</h1>
          <p className="lead mt-3 mb-4">
            Trusted by parents and schools — empowering learners with mentoring, career counseling, and training.
          </p>
          <Button variant="success" size="lg" className="shadow-lg">
            Explore Our Services 
          </Button><hr />
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Core Services</h2>
          <Row className="g-4">
            {[
              { title: "Tuition & Training", text: "Expert academic support for school and college students.", icon: <FaChalkboardTeacher /> },
              { title: "Career Guidance", text: "Helping students choose the right academic and career paths.", icon: <FaChartLine /> },
              { title: "Mentoring", text: "Personal growth and skill-building with experienced mentors.", icon: <FaUserGraduate /> },
              { title: "Parent–Student Counseling", text: "Building better understanding and communication at home.", icon: <FaUsers /> },
              { title: "Academic Planning", text: "Helping students plan goals and achieve milestones.", icon: <FaBookReader /> },
              { title: "Skill Development", text: "Critical thinking, leadership, and confidence building.", icon: <FaLightbulb /> },
            ].map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="service-card text-center h-100 border-0 shadow-lg bg-dark bg-opacity-75 text-light">
                  <Card.Body>
                    <div className="service-icon mb-3 fs-1 text-success">{service.icon}</div>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Button variant="outline-success">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-dark bg-opacity-75">
        <Container>
          <h2 className="text-center fw-bold mb-5">What Parents Say</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="bg-light text-dark h-100 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “Their mentoring program transformed my son’s confidence and performance.”
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-success">– Mrs. Ayesha, Lahore</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-light text-dark h-100 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “Excellent career guidance — now my daughter is pursuing the right field.”
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-success">– Mr. Imran, Rawalpindi</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-light text-dark h-100 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “The team genuinely cares about students and gives practical advice to parents.”
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-success">– Mrs. Sana, Islamabad</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="text-center py-5">
        <Container>
          <h3 className="fw-bold">Ready to Start the Journey?</h3>
          <p>Let’s discuss how we can support your child’s academic success and personal growth.</p>
          <Button variant="success" size="lg">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
