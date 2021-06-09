import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser.token);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Welcome To Event Planning App</h3>
      </header>
    </div>
  );
};

export default Profile;
