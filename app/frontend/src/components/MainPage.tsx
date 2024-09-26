import { useNavigate } from "react-router-dom";
import ChatWindow from "./ChatWindow.tsx";

function MainPage() {
  const navigate = useNavigate();

  const onLogout = async (e: any) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="bg-wpi-gray w-screen h-screen flex justify-center items-center">
        <h1>Main Page</h1>
        <button
          className="bg-wpi-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          id="logoutButton"
          onClick={onLogout}
        >
          Logout
        </button>
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "500px",
            bottom: "0",
            right: "0",
            zIndex: 1000,
          }}
        >
          <ChatWindow />
        </div>
      </div>
    </>
  );
}

export default MainPage;
