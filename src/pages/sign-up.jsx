// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignupForm = () => {
//   const navigate = useNavigate();

//   // State for each field
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Individual change handlers
//   const handleNameChange = (e) => setName(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   // Submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // ✅ Prevent page reload

//     if (!name || !email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     console.log("Signup successful:", { name, email, password });

//     // Navigate to home page
//     navigate("/");
//   };

//   return (
//     <div className="container mt-5 pt-3">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">
//           <div className="card shadow-sm border-0">
//             <div className="card-body p-4">
//               <h2 className="text-center mb-4 text-primary fw-bold">Sign Up</h2>

//               <form onSubmit={handleSubmit}>
//                 {/* Full Name */}
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={handleNameChange}
//                     className="form-control"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     className="form-control"
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div className="mb-4">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     className="form-control"
//                     placeholder="Enter your password"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-primary">
//                     Sign Up
//                   </button>
//                 </div>
//               </form>

//               <p className="text-center mt-3 mb-0 text-muted">
//                 Already have an account?{" "}
//                 <a href="#" className="text-decoration-none">
//                   Login
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;


import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth-layout";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up data:", form);
  };

  return (
    <AuthLayout title="Create Your Account">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Sign Up
        </Button>

        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link to="/sign-in" className="text-success fw-bold">
              Sign In
            </Link>
          </small>
        </div>
      </Form>
    </AuthLayout>
  );
}

export default SignUp;
