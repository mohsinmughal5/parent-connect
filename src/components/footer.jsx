import React from "react";

function Footer() {
  return (
    <footer
      style={{
        positioN: "ABSOLUTE",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#343a40",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
        zIndex: 1000,
        top: "2vh",
      }}
    >
      © 2025 Parent Connect | All Rights Reserved
    </footer>
  );
}

export default Footer;
