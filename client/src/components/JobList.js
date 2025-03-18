import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <input 
        type="text" 
        placeholder="Search jobs..." 
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {jobs
          .filter(job => job.title.toLowerCase().includes(search.toLowerCase()))
          .map(job => (
          <li key={job._id}>
            <Link to={`/jobs/${job._id}`}>{job.title} - {job.location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
