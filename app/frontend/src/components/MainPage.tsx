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
      {/* top nav bar w logout + about 
    mainpage h1
    btm r chatbot popup btn*/}
      <header className="bg-wpi-red inset-x-0 top-0 h-16 px-8 grid justify-items-end items-center">
        <button
          className="bg-black hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          type="button"
          id="logoutButton"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>
      
      <div className="bg-wpi-gray w-screen h-screen flex justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Main Page</h1>

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
