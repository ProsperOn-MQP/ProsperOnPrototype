import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Login auth here
    try {
      const response = await axios.post(
        "http://localhost:5001/login",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success == true) {
        navigate("/main");
      } else {
        alert("Wrong username or password");
      }
    } catch (error) {
      alert("Wrong username or password");
    }
  };

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <Navbar isLoggedIn={false} />
      <div className="h-4/5 flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white mb-8 w-full">
            <img className="max-h-50" src={"/src/assets/wpi.png"} />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-center">Log In</h1>
          <form onSubmit={handleLogin}>
            <FontAwesomeIcon
              icon={faUser}
              size="xs"
              className="text-wpi-red pr-1"
            />
            <label className="text-wpi-red font-bold w-full justify-left">
              Username
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              id="usernameInput"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <FontAwesomeIcon
              icon={faLock}
              size="xs"
              className="text-wpi-red pr-1"
            />
            <label className="text-wpi-red font-bold w-full justify-left">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              id="passwordInput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-wpi-red hover:bg-red-700 text-white text-size-lg font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
