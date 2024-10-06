import decodeToken from "../utility/decodeToken.js";
import Student from "../models/Student.js";

// Fetches all messages of a user
const fetchMessages = async (req, res) => {
    // Decode cookie for email address
    const userEmail = decodeToken(req.signedCookies.authenticationToken).email;

    // Query database for chatlogs of given email address
    const user = await Student.findOne({email: userEmail}).select("chat").exec();
    if (!user) {
        res.status(404).json({error: "User not found"});
    }

    // Filter out system message
    const chatlogs = user.chat.toObject().filter((message) => message.role !== "system");

    // Send back response
    return res.status(202).json(chatlogs);
}

export default fetchMessages; 