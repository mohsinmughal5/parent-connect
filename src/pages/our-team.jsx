import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col, ButtonGroup } from "react-bootstrap";
import TeamData from "../components/team-data";
import CustomPagination from "../components/pagination";


function OurTeam() {
  const [team] = useState([...TeamData]); // spread operator
  const [filteredTeam, setFilteredTeam] = useState([...TeamData]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;



  const categories = ["All", "Advisory", "Training", "Mentoring", "Counseling", "Management"];

  // 🔍 Handle filter selection
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredTeam([...team]);
    } else {
      const filtered = team.filter((member) => member.category === category);
      setFilteredTeam([...filtered]);
    }
  };

  // 🔍 Open Modal by ID
  const handleOpen = (id) => {
    const member = team.find((person) => person.id === id);
    setSelectedMember({ ...member });
    setShow(true);
  };

  const handleClose = () => setShow(false);
  // Calculate which members to show on this page
const startIndex = (currentPage - 1) * itemsPerPage;
const currentMembers = filteredTeam.slice(startIndex, startIndex + itemsPerPage);


  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold text-light fw-ul">Our Team</h2>

      {/* 🔘 Filter Buttons */}
      <div className="text-center mb-4">
        <ButtonGroup>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="outline-light"
              className="mx-1"
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      {/* 🧩 Team Cards */}
      <Row>
        {currentMembers.map((member) => (
          <Col md={4} sm={6} key={member.id} className="mb-4">
            <Card className="shadow-sm h-100 border-0">
              <div className="overflow-hidden" style={{ height: "250px", backgroundColor: "#c8ddf3ff" }}>
                <Card.Img
                  variant="top"
                  src={member.img}
                  alt={member.name}
                  className="img-fluid team-card-img"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    objectFit: "Contain",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={() => handleOpen(member.id)}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
              <Card.Body className="text-center" style={{ backgroundColor: "#e2e2b0ff" }}>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.role}</Card.Text>
                <Button variant="primary" onClick={() => handleOpen(member.id)}>
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        <CustomPagination
  totalItems={filteredTeam.length}
  itemsPerPage={itemsPerPage}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
/>


      {/* 🪟 Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMember?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedMember?.img}
            alt={selectedMember?.name}
            className="img-fluid rounded mb-3"
          />
          <h5>{selectedMember?.role}</h5>
          <p>{selectedMember?.bio}</p>
          <p>
            <strong>Category:</strong> {selectedMember?.category}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    
  );


}

export default OurTeam;
