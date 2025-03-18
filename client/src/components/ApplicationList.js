import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicationItem from "./ApplicationItem";

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/applications")
      .then(res => setApplications(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Applications</h1>
      {applications.map(app => <ApplicationItem key={app._id} app={app} />)}
    </div>
  );
};

export default ApplicationList;
