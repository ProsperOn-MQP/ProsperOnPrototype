import decodeToken from "../utility/decodeToken.js";
import Student from "../models/Student.js";

// Fetches messages of a user and filters questions and responses based on a query
const searchMessages = async (req, res) => {
  try {
    // Decode cookie for email address
    const userEmail = decodeToken(req.signedCookies.authenticationToken).email;

    // Query database for chat logs of the given email address
    const user = await Student.findOne({ email: userEmail })
      .select("chat")
      .exec();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Convert chat data to an object array and filter out system messages
    let chatlogs = user.chat
      .toObject()
      .filter((message) => message.role !== "system");

    const { query } = req.query;
    if (query) {
      const lowerCaseQuery = query.toLowerCase();

      const questions = chatlogs.filter(
        (message) =>
          message.role === "user" &&
          message.content.toLowerCase().includes(lowerCaseQuery)
      );
      /* 
            const responses = chatlogs.filter(
                (message) => message.role === "bot" && message.content.toLowerCase().includes(lowerCaseQuery)
            ); 
            
*/

      // Return both matching questions and responses
      return res.status(200).json({ questions /* , responses  */ });
    }

    return res.status(200).json(chatlogs);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default searchMessages;
