import { useNavigate } from "react-router-dom";
import PopupComponent from "./PopupComponent";
import HelpPage from "../pages/HelpPage";
import LoginPage from "../pages/LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  isLoggedIn: boolean;
  pageName: string;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, pageName }) => {
  const navigate = useNavigate();

  //handle login
  const onLogout = async (e: any) => {
    e.preventDefault();
    {
      navigate("/landing");
    }
  };

  return (
    <header className="sticky bg-wpi-red inset-x-0 top-0 h-16 px-8 flex items-center relative">
      <h1 className="text-3xl text-white absolute left-1/2 transform -translate-x-1/2 mb-4 pt-2">
        {pageName}
      </h1>

      <div className="ml-auto flex items-center space-x-4">
        <PopupComponent
          trigger={
            <button className="bg-wpi-red hover:bg-red-800 px-3 py-2 flex-col text-white text-xs rounded focus:outline-none focus:shadow-outline">
              <FontAwesomeIcon icon={faCircleQuestion} size="2x" /> <p>Help</p>
            </button>
          }
          pageComponent={<HelpPage isLoggedIn={isLoggedIn} />}
        />

        {/*if logged in, show logout button -> leads to landing page
         if logged out, show login button -> leads to login popup*/}
        {isLoggedIn ? (
          <button
            className="bg-wpi-red hover:bg-red-800 px-3 py-2 flex-col text-white text-xs rounded focus:outline-none focus:shadow-outline"
            type="button"
            id="logoutButton"
            onClick={onLogout}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />{" "}
            <p>Logout</p>
          </button>
        ) : (
          <PopupComponent
            trigger={
              <button className="bg-wpi-red hover:bg-red-800 px-3 py-2 flex-col text-white text-xs rounded focus:outline-none focus:shadow-outline">
                <FontAwesomeIcon icon={faArrowRightToBracket} size="2x" />{" "}
                <p>Login</p>
              </button>
            }
            pageComponent={<LoginPage />}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
