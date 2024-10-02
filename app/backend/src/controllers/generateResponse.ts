import Student from "../models/Student.js";
import {openai } from "../chatgpt/OpenAI.js";

const generateResponse = async (req, res) => {
    // Query database for chatlogs of the requesting user
    const user = await Student.findOne({email: req.body.email}).select("chat").exec();
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }

    // Push new message to database
    const chatlogs = user.chat;
    chatlogs.push(req.body.message);
    await user.save();

    // Send request to OpenAI
    const messagesToSend = user.chat.toObject()
    
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messagesToSend
    });

    // Send back response
    res.send("Post request");


};

export default generateResponse;