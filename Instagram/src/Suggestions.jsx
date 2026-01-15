import React, { useEffect, useState } from "react";

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggetions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggetions(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profilePic}
              alt="profile pic"
            />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
