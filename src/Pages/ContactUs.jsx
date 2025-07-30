import React from "react";

export default function ContactUs() {
  return (
    <div className="container py-5 vh-100 mt-5 ">
      <h2 className="text-center mb-4 text-primary fw-bold">Contact Us</h2>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
}
