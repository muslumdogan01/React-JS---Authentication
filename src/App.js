import React, {useState, useEffect} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import SingUp from "./Components/SingUp/SingUp";
import Logout from "./Components/Logout/Logout";
import About from "./Pages/About/About";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import SingUpSuccess from "./Components/SingUp/SingUpSuccess";

function App() {
  const [userName, setUserName] = useState("");


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div className="App">
         <header>
        <Header/>
      </header>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/SingUpSuccess" element={<SingUpSuccess />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Content" element={<Content name={userName}/>} />
        <Route exact path="/" element={<Home name={userName} />} />
      </Routes>
    </div>
  );
}

export default App;
