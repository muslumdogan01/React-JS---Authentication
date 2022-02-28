import React from "react";
import { Link } from "react-router-dom";

const SingUpSuccess = () => {
  return (
    <div>
      <h1>Your registration is successful. Please <Link to={"/Login"}>
      <a>login</a>
      </Link>.</h1>
    </div>
  );
};

export default SingUpSuccess;
