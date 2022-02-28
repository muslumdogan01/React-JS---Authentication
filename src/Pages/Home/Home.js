import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return <div>
    <h1>Welcome to test authentication. Please <Link to={"/SingUp"}><a>SingUp</a></Link></h1>
  </div>;
};

export default Home;
