import React, { useEffect, useState } from "react";

const User = () => {
  /* let user = "denem"; */
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("Mounting");
    getUser();
  }, []);

  console.log("rendering");
  console.log(user);
  return (
    <div>
      <h1>{user?.name?.first} {user?.name?.last}</h1>
      <img className="rounded-circle" src={user?.picture?.large} alt="" />
      <h4>{user?.email}</h4>
      <h5>Tel: {user?.phone}</h5>
      <p>Age: {user?.dob?.age}</p>
      <p>Date of Birth: {new Date(user?.dob?.date).toLocaleDateString("en-GB")}</p>

      <button className="btn btn-primary" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
