import { useNavigate } from "react-router-dom";
import HelpPage from "./HelpPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  //handle login
  const onLoginPage = async (e: any) => {
    e.preventDefault();
    {
      isLoggedIn ? navigate("/landing") : navigate("/login");
    }
  };

  return (
    <header className="sticky bg-wpi-red inset-x-0 top-0 h-16 px-8 flex justify-end items-center space-x-4">
      <Popup
        trigger={
          <button className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon icon={faCircleQuestion} /> Help
          </button>
        }
        modal
      >
        {(close: () => void) => (
          <div className="modal w-screen h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 z-0"></div>
            <div className="content border-2 border-black bg-white mx-4 p-8 rounded w-full md:w-1/2 lg:w-1/3 z-10">
              <HelpPage />
              <footer className="sticky bottom-0 h-16 grid justify-items-end items-center">
                <button
                  className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  id="helpButton"
                  onClick={() => close()}
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        )}
      </Popup>

      <button
        className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="logoutButton"
        onClick={onLoginPage}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
};

export default Navbar;
