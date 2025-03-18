import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employer/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Employer Dashboard</h1>
      {jobs.map(job => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <button onClick={() => alert("Viewing applicants")}>View Applicants</button>
        </div>
      ))}
    </div>
  );
};

export default EmployerDashboard;
