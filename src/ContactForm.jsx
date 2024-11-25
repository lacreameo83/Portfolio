import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // EmailJS integration
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          user_email: formData.email,
          user_message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(
            "Message sent successfully!",
            response.status,
            response.text
          );
          setIsSubmitted(true);
          setFormData({ email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send message:", error);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="p-6 mb-4 bg-gray-50 border-t border-gray-300 rounded-md shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Have a question or just want to say hi? Drop a message below.
      </p>

      {isSubmitted ? (
        <div className="text-center text-green-600 font-semibold">
          Thank you for reaching out! I’ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>

          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default ContactForm;
