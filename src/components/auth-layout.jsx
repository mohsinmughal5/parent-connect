import React from "react";
import { Container } from "react-bootstrap";

const AuthLayout = ({ children, title }) => (
  <div className="auth-bg d-flex justify-content-center align-items-center vh-100">
    <Container style={{ maxWidth: "400px" }}>
      <div className="p-4 bg-light rounded shadow-lg">
        <h3 className="text-center text-success mb-4">{title}</h3>
        {children}
      </div>
    </Container>
  </div>
);

export default AuthLayout;
