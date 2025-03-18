const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
  const application = new Application(req.body);
  try {
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    res.json(application);
  } catch (err) {
    res.status(404).json({ message: "Application not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
