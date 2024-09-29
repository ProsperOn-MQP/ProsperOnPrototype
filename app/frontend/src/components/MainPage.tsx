import { useNavigate } from "react-router-dom";
import ChatWindow from "./ChatWindow.tsx";
import { useState } from "react";

function MainPage() {
  const navigate = useNavigate();

  const onLogout = async (e: any) => {
    e.preventDefault();
    navigate("/login");
  };

  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <header className="bg-wpi-red inset-x-0 top-0 h-16 px-8 grid justify-items-end items-center">
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          type="button"
          id="logoutButton"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>
      <h1 className="text-3xl font-bold mb-4 text-center">Main Page</h1>
      <div className="absolute bottom-16 right-8 lg:w-1/4 lg:h-3/5 md:w-1/2 md:h-3/4 w-4/5 h-4/5">
        {showComponent && <ShowChatbot />}
      </div>

      <footer className="absolute bottom-0 right-8 h-16 grid justify-items-end items-center">
        <button
          className="bg-wpi-red hover:bg-red-700 w-12 h-12 fixed rounded-full"
          onClick={() => setShowComponent(!showComponent)}
        ></button>
      </footer>
    </div>
  );
}

function ShowChatbot() {
  return (
    <div className="w-auto h-auto">
      <ChatWindow />
    </div>
  );
}

export default MainPage;
