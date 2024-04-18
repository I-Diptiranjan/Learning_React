import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div>Please Login</div>;
  return <div>Hello : {user.username}</div>;
};

export default Profile;
