const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const Application = require("../models/Application");

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.query.employerId });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/applications/:jobId", async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
