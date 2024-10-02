import { useNavigate } from "react-router-dom";
import PopupComponent from "./PopupComponent";
import HelpPage from "./HelpPage";
import LoginPage from "./LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  //handle login
  const onLogout = async (e: any) => {
    e.preventDefault();
    {
      navigate("/landing");
    }
  };

  return (
    <header className="sticky bg-wpi-red inset-x-0 top-0 h-16 px-8 flex justify-end items-center space-x-4">
      <PopupComponent
        trigger={
          <button className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon icon={faCircleQuestion} /> Help
          </button>
        }
        pageComponent={<HelpPage isLoggedIn={isLoggedIn} />}
      />

      {/*if logged in, show logout button -> leads to landing page
         if logged out, show login button -> leads to login popup*/}
      {isLoggedIn ? (
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          type="button"
          id="logoutButton"
          onClick={onLogout}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </button>
      ) : (
        <PopupComponent
          trigger={
            <button className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">
              <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
            </button>
          }
          pageComponent={<LoginPage />}
        />
      )}
    </header>
  );
};

export default Navbar;
