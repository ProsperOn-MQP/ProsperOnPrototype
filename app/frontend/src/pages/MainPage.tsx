import Navbar from "../components/Navbar.tsx";
import ChatWindow from "../components/ChatWindow.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceLaugh } from "@fortawesome/free-solid-svg-icons";
import Syllabus from "../components/Syllabus.tsx";
import SelectionTracker from "../components/SelectionTracker.tsx";

function MainPage() {
  // icons
  const [isHovered, setIsHovered] = useState(false);

  // handle chatbot button
  const [showComponent, setShowComponent] = useState(false);
  const [suggestion, setSuggestion] = useState<string>("");
  const [isRotated, setIsRotated] = useState(false); // Track the rotation state

  const handleSelection = (selectedText: string) => {
    setSuggestion(selectedText);
    if (selectedText !== "") {
      setIsRotated(true);
      setTimeout(() => setIsRotated(false), 500);
    }
  };

  function ShowChatbot({ suggestion }: { suggestion: string }) {
    return (
      <div className="w-auto h-auto">
        <ChatWindow
          suggestion={suggestion}
          onChatClose={() => console.log(false)}
        />
      </div>
    );
  }

  return (
    <div>
      <div>
        <SelectionTracker onSelectionChange={handleSelection} />
      </div>
      <Navbar isLoggedIn={true} pageName="Course Syllabus" />

      <div className="bg-white text-black w-full h-full whitespace-normal break-words">
        <div className="flex items-center justify-center">
          <Syllabus
            onOpenChat={() => {
              setShowComponent(true);
              console.log("true");
            }}
          />
        </div>

        <div className="fixed bottom-16 right-8 lg:w-1/4 lg:h-3/5 md:w-1/2 md:h-3/4 w-4/5 h-4/5">
          {showComponent && <ShowChatbot suggestion={suggestion} />}
        </div>
      </div>
      <footer className="absolute bottom-0 right-8 h-16 grid justify-items-end items-center">
        <button
          className="bg-wpi-red hover:bg-red-800 w-12 h-12 focus:outline-none fixed rounded-full flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowComponent(!showComponent)}
        >
          <FontAwesomeIcon
            icon={isHovered ? faFaceLaugh : faFaceSmile}
            size="xl"
            className={`text-white transform transition-transform duration-300 ${
              isHovered || isRotated ? "rotate-360" : ""
            }`}
          />
        </button>
      </footer>
    </div>
  );
}

export default MainPage;
