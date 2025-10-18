import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner, Modal } from "react-bootstrap";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null); // To store the clicked blog
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  if (loading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading blogs...</p>
      </div>
    );

  return (
    <Container className="py-5 mt-5">
      <h2 className="text-center mb-4 fw-bold text-success">Our Blogs</h2>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} sm={6} xs={12} key={blog.id} className="mb-4">
            <Card className="shadow-sm h-100 border-0">
              <div className="overflow-hidden" style={{ height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={`https://picsum.photos/400/250?random=${blog.id}`} // Random placeholder image
                  alt={blog.title}
                  className="img-fluid"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="text-muted small">
                  Tags: {blog.tags.join(", ")}
                </Card.Text>
                <Card.Text>
                  {blog.body.length > 100
                    ? blog.body.substring(0, 100) + "..."
                    : blog.body}
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleOpen(blog)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 🪟 Blog Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://picsum.photos/800/400?random=${selectedBlog?.id}`}
            alt={selectedBlog?.title}
            className="img-fluid rounded mb-3"
          />
          <p>{selectedBlog?.body}</p>
          <div className="mt-3">
            <strong>Tags:</strong>{" "}
            {selectedBlog?.tags.map((tag, index) => (
              <span key={index} className="badge bg-success mx-1">
                {tag}
              </span>
            ))}
          </div>
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

export default Blogs;