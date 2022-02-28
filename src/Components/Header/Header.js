import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"}>
                <a className="navbar-link px-3">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/About"}>
                <a className="navbar-link px-3">About</a>
              </Link>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  <Logout />
                </Link>
              </li>

              <li className="nav-item ">
                <Link to={"/Login"}>
                  <a className="navbar-link px-3">Login</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/singUp"}>
                  <a className="navbar-link px-2">singUp</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
