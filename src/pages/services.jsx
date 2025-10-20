import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaChalkboardTeacher,
  FaChartLine,
  FaUserGraduate,
  FaUsers,
  FaBookReader,
  FaLightbulb,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "Tuition & Training",
      icon: <FaChalkboardTeacher />,
      description:
        "High-quality academic coaching for school and college students. We focus on building conceptual understanding and exam confidence through personalized learning.",
    },
    {
      title: "Career Guidance",
      icon: <FaChartLine />,
      description:
        "Helping students discover their potential through aptitude assessments, counseling sessions, and goal setting for future studies and careers.",
    },
    {
      title: "Mentoring",
      icon: <FaUserGraduate />,
      description:
        "Our mentoring program connects students with experienced mentors to build motivation, discipline, and life skills that go beyond the classroom.",
    },
    {
      title: "Parent–Student Counseling",
      icon: <FaUsers />,
      description:
        "We help parents and children communicate better, understand learning challenges, and develop supportive routines for success at home.",
    },
    {
      title: "Academic Planning",
      icon: <FaBookReader />,
      description:
        "Guidance for setting academic goals, choosing the right subjects, and organizing study plans to achieve long-term success.",
    },
    {
      title: "Skill Development",
      icon: <FaLightbulb />,
      description:
        "Workshops and training that strengthen problem-solving, communication, teamwork, and confidence — essential 21st-century skills.",
    },
  ];

  return (
    <div className="text-light pt-5">
      {/* Page Header */}
      <section className="text-center mt-5 py-5">
        <Container>
          <h1 className="fw-bold text-light mb-3">Our Services</h1>
          <p className="lead">
            Discover how <span className="fw-semibold">Parent-Connect</span> supports
            students and families through education, guidance, and personal growth.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-4">
        <Container>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-lg bg-dark bg-opacity-75 text-light">
                  <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <div>
                      <div className="mb-3 fs-1 text-success">{service.icon}</div>
                      <Card.Title className="fw-bold">{service.title}</Card.Title>
                      <Card.Text className="mt-3">{service.description}</Card.Text>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline-success" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="text-center py-5 bg-dark bg-opacity-75 mt-5">
        <Container>
          <h3 className="fw-bold text-success mb-3">Want to Learn More?</h3>
          <p className="text-light mb-4">
            Contact us to explore customized mentoring, training, or counseling options for your child.
          </p>
          <Button variant="success" as="a" href="/contact-us">
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;




// import React from 'react'

// const ServicesPage = () => {
//   return (
//     <div className="container mt-5 pt-5">
//       <h1>Our Services</h1>
//       <p>We provide tuition, career guidance, mentoring, and more.</p>
//     </div>
//   )
// }

// export default ServicesPage