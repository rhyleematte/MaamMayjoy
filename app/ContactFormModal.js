"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactFormModal({ onClose }) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_qdc37xp",      // Your EmailJS service ID
        "template_j8hdvco",     // Your EmailJS template ID
        formData,               // Must match template variable names
        "a9Ie9KfolOvtl08s8"     // Your EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
        setSending(false);
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message. Try again later.");
        setSending(false);
      });
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={{ marginBottom: "16px" }}>Send me a message</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            style={inputStyle}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" style={submitButtonStyle} disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            <button type="button" style={closeButtonStyle} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ===== Styles =====
const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#111",
  color: "white",
  padding: "24px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "500px",
};

const inputStyle = {
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid #555",
  backgroundColor: "#111",
  color: "white",
  fontSize: "1rem",
};

const submitButtonStyle = {
  padding: "10px 16px",
  borderRadius: "30px",
  backgroundColor: "#4B0082",
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
  border: "none",
  fontSize: "1rem",
};

const closeButtonStyle = {
  padding: "10px 16px",
  borderRadius: "30px",
  backgroundColor: "#555",
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
  border: "none",
  fontSize: "1rem",
};
