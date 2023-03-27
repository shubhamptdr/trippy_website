import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" cols="30" rows="3"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
