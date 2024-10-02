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
      <h2 className="text-2xl font-bold">Welcome to our PQP chatbot!</h2>
      <p>This product is an ai "best friend" for your PQP class taught by Proffesor Wong.</p>
      <h2 className="text-2xl font-bold">Whats this for?</h2>
      <p>For us, its a proof of concept for the ai chatbot we're going to make for our MQP.</p>
      <p>For you, its a chance to ask the chatbot questions about the PQP syllabus or general questions.</p>
      <h2 className="text-2xl font-bold">Hows it work?</h2>
      <p>Magic! But mostly OpenAI and MongoDB.</p>
    </div>
  );
}

export default LandingPage;
