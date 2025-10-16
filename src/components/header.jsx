import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${scrolled ? "navbar-solid" : "navbar-transparent"}`}
    >
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          <img  src="/public/mainlogo.png" alt="mainlogo"  style={{height: "50px", Width: "50px"}}/><span className="text-success">Parent Connect</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`mx-2 ${location.pathname === "/" ? "active-link" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={`mx-2 ${location.pathname === "/services" ? "active-link" : ""}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/our-team"
              className={`mx-2 ${location.pathname === "/our-team" ? "active-link" : ""}`}
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              className={`mx-2 ${location.pathname === "/contact-us" ? "active-link" : ""}`}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
