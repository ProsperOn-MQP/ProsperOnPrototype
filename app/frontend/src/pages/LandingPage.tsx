import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

function LandingPage() {
  /*nav bar -help and login
    image?
    text -readme style
    */

  return (
    <div className="w-full h-full whitespace-normal break-words">
      <Navbar isLoggedIn={false} pageName="Landing Page" />
      <div className="bg-white text-black w-full h-full whitespace-normal break-words">
        <div className="flex items-center justify-center">
          <Welcome />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
