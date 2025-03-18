import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/users/USER_ID") // Change USER_ID dynamically
      .then(res => {
        setProfile(res.data);
        setName(res.data.name);
      })
      .catch(err => console.log(err));
  }, []);

  const updateProfile = () => {
    axios.put(`http://localhost:5000/users/${profile._id}`, { name })
      .then(() => alert("Profile updated"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {profile.email}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={updateProfile}>Update</button>
    </div>
  );
};

export default Profile;
