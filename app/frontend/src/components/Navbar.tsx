//import React from "react";
//import axios from "axios";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  //handle login
  const onLogin = async (e: any) => {
    e.preventDefault();
    navigate("/landing");
  };

  //handle help -- temp
  const onHelp = async (e: any) => {
    e.preventDefault();
    navigate("/help");
  };

  /*nav bar -help and login
   */

  return (
    <header className="sticky bg-wpi-red inset-x-0 top-0 h-16 px-8 flex justify-end items-center space-x-4">
      <button
        className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="helpButton"
        onClick={onHelp}
      >
        Help
      </button>
      <button
        className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="logoutButton"
        onClick={onLogin}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
      </button>
    </header>
  );
}

export default Navbar;
