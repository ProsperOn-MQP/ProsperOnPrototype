import Navbar from "./Navbar.tsx";
import ChatWindow from "./ChatWindow.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceLaugh } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  //icons
  const [isHovered, setIsHovered] = useState(false);

  //handle chatbot button
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <Navbar isLoggedIn={true} />
      <h1 className="text-3xl font-bold mb-4 text-center">Main Page</h1>
      <div className="absolute bottom-16 right-8 lg:w-1/4 lg:h-3/5 md:w-1/2 md:h-3/4 w-4/5 h-4/5">
        {showComponent && <ShowChatbot />}
      </div>

      <footer className="absolute bottom-0 right-8 h-16 grid justify-items-end items-center">
        <button
          className="bg-wpi-red hover:bg-red-700 w-12 h-12 focus:outline-none	fixed rounded-full flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowComponent(!showComponent)}
        >
          <FontAwesomeIcon
            icon={isHovered ? faFaceLaugh : faFaceSmile}
            size="xl"
            className="text-white hover:rotate-360 duration-300 leading-none"
          />
        </button>
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
