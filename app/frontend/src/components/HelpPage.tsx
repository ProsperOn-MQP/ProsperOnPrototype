//import React from "react";
//import axios from "axios";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function HelpPage() {
  const navigate = useNavigate();

  //handle login
  const onLogin = async (e: any) => {
    e.preventDefault();
    navigate("/main");
  };

  /*
    text -p
    */

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <h1>Help Page</h1>
      <button onClick={onLogin}>Main</button>
    </div>
  );
}

export default HelpPage;
