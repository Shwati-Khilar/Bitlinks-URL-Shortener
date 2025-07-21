"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: implement backend/API handling, or use an email service.
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {submitted ? (
        <div className="p-4 bg-purple-100 rounded">Thank you for reaching out!</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            className="p-2 border rounded"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            className="p-2 border rounded"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            required
            className="p-2 border rounded"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="bg-purple-500 text-white p-2 rounded font-bold">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
