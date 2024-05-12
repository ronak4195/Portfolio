import React, { useState } from "react";
import "./css/Contact.css";
export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65284ab9-bbed-4bca-ae37-30548f40c0db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contactBox">
      <h6 className="contactHeading">Reach out to me!</h6>
      <form onSubmit={onSubmit} className="contactCard">
        <input
          className="name inputBar"
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="email inputBar"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          className="message"
          placeholder="Your Message"
          name="message"
          required
        ></textarea>
        <div className="sendButton">
          <button className="button">Send Message</button>
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
}
