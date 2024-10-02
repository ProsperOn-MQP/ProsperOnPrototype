//import React from "react";
//import axios from "axios";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const navigate = useNavigate();

  //handle login
  const onLogin = async (e: any) => {
    e.preventDefault();
    navigate("/login");
  };

  /*nav bar -help and login
    image?
    text -readme style
    */

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <Navbar isLoggedIn={false} />
      <h1 className="text-3xl font-bold mb-4 text-center">Landing Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LandingPage;
