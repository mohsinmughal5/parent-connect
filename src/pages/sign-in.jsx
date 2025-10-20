import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth-layout";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In with:", { email, password });
  };

  return (
    <AuthLayout title="Welcome Back">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Sign In
        </Button>

        <div className="text-center mt-3">
          <small>
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-success fw-bold">
              Sign Up
            </Link>
          </small>
        </div>
      </Form>
    </AuthLayout>
  );
}

export default SignIn;
