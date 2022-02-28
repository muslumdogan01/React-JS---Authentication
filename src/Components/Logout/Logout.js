import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
  const singOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div>
      <a onClick={singOut}>Logout</a>
    </div>
  );
};

export default Logout;
