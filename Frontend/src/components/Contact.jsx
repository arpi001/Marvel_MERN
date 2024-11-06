import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("http://localhost:4001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Message Failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 p-4">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-red-600">
          Get in Touch with the Marvel Universe! 
        </h1>
        <p className="mt-4 text-center text-lg font-semibold text-yellow-500">
          We’d love to hear from you! Whether you have questions, suggestions, or just want to share <br /> your favorite Marvel moment, reach out to us!
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm text-black">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 shadow-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 shadow-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm text-black">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 shadow-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-lg font-semibold text-green-600">
            {status}
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
