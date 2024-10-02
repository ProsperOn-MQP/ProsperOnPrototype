import Navbar from "./Navbar.tsx";
import ChatWindow from "./ChatWindow.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceLaugh } from "@fortawesome/free-solid-svg-icons";
import Syllabus from "./Syllabus.tsx";
//import FocusContext from "./FocusContext.tsx";
import SelectionTracker from "./SelectionTracker";

function MainPage() {
  //icons
  const [isHovered, setIsHovered] = useState(false);

  //handle chatbot button
  const [showComponent, setShowComponent] = useState(false);
  const [suggestion, setSuggestion] = useState<string>("");

  const handleSelection = (selectedText: string) => {
    setSuggestion(selectedText);
    setShowComponent(true);
  };

  return (
    <div>
      <div>
        <SelectionTracker onSelectionChange={handleSelection} />
      </div>
      <Navbar isLoggedIn={true} />
      <h1 className="text-3xl font-bold mb-4 text-center">Main Page</h1>

      <div className="bg-white text-black w-full h-full whitespace-normal break-words">
        <header className="fixed bg-wpi-red inset-x-0 top-0 h-16 px-8 grid justify-items-end items-center">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
            type="button"
            id="logoutButton"
            onClick={onLogout}
          >
            Logout
          </button>
        </header>

        <div className="flex items-center justify-center">
          <Syllabus />
        </div>

        <div className="fixed bottom-16 right-8 lg:w-1/4 lg:h-3/5 md:w-1/2 md:h-3/4 w-4/5 h-4/5">
          {showComponent && <ShowChatbot suggestion={suggestion} />}{" "}
        </div>
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

function ShowChatbot({ suggestion }: { suggestion: string }) {
  return (
    <div className="w-auto h-auto">
      <ChatWindow suggestion={suggestion} />{" "}
    </div>
  );
}

export default MainPage;
