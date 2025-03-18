import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const applyForJob = () => {
    axios.post("http://localhost:5000/applications", { jobId: id })
      .then(() => alert("Application submitted"))
      .catch(err => console.log(err));
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: ${job.salary}</p>
      <button onClick={applyForJob}>Apply Now</button>
    </div>
  );
};

export default JobDetails;
