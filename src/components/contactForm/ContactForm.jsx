import React, { useState } from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert("Your message has been sent");
  };
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
