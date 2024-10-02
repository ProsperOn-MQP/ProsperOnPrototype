import Navbar from "./Navbar";

function LandingPage() {
  /*nav bar -help and login
    image?
    text -readme style
    */

  return (
    <div className="bg-wpi-gray w-screen h-screen">
      <Navbar isLoggedIn={false} />
      <h1 className="text-3xl font-bold mb-4 text-center">Landing Page</h1>
    </div>
  );
}

export default LandingPage;
