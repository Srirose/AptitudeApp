const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

// Submit Feedback
router.post("/submit", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();

        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
