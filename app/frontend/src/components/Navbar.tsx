import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
    isLoggedIn: boolean;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  //handle login
  const onLogin = async (e: any) => {
    e.preventDefault();
    {isLoggedIn ? navigate("/landing") : navigate("/login")}
    ;
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
        <FontAwesomeIcon icon={faCircleQuestion} /> Help
      </button>
      <button
        className="bg-black hover:bg-gray-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="logoutButton"
        onClick={onLogin}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
}

export default Navbar;
