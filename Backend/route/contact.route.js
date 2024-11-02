import express from "express";
import Contact from "../model/Contact.js";

const router = express.Router();

// POST /contact - Save contact form data
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation to ensure fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create and save a new contact entry
    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: "Message received. Thank you!" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Failed to submit message.", error });
  }
});

export default router;
