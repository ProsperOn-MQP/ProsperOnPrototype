import PopupComponent from "./PopupComponent";
import LoginPage from "./LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

interface HelpPageProps {
  isLoggedIn: boolean;
}

const HelpPage: React.FC<HelpPageProps> = ({ isLoggedIn }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Help Page</h1>

      {isLoggedIn ? (
        <div>
          <h2 className="text-2xl font-bold">Openning the Chatbot</h2>
          <p>
            Click the red button in the bottom right corner to open/close the
            chatbot
          </p>

          <h2 className="text-2xl font-bold">Syllabus Questions</h2>
          <p>
            Click-drag on the syllabus to highlight words you have a question
            about, watch them automatically appear in the cahtbot input!
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold"> Uh Oh!</h2>
          <p>This feature is unlocked after you login!</p>
          <PopupComponent
            trigger={
              <button className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
              </button>
            }
            pageComponent={<LoginPage />}
          />
        </div>
      )}
    </div>
  );
};

export default HelpPage;
