import React from "react";

const ApplicationItem = ({ app }) => {
  return (
    <div>
      <h3>Application for Job ID: {app.jobId}</h3>
      <p>Status: {app.status}</p>
    </div>
  );
};

export default ApplicationItem;
