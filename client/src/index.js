import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import ApplicationList from "./components/ApplicationList";
import Profile from "./components/Profile";
import EmployerDashboard from "./components/EmployerDashboard";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/applications" element={<ApplicationList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/employer" element={<EmployerDashboard />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
