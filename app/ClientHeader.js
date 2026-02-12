"use client";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function ClientHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "1rem",
          }}
        >
          <a href="#about" style={linkStyle}>About Me</a>
          <a href="#projects" style={linkStyle}>Featured Projects</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#tech" style={linkStyle}>Technology</a>
        </nav>

        {/* Message Me Button */}
        <button
          onClick={() => setShowModal(true)}
          style={messageButtonStyle}
        >
          Message Me
        </button>
      </header>

      {/* Contact Form Modal */}
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
    </>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 500,
  transition: "color 0.3s ease",
};

const messageButtonStyle = {
  padding: "8px 20px",
  borderRadius: "30px",
  backgroundColor: "#4B0082",
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s ease",
};
