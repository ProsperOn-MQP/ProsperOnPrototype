import OpenAI from "openai";
import Student from "../models/Student.js";

const generateResponse = async (req, res) => {
    // Query database for chatlogs of the requesting user
    const user = await Student.findOne({email: req.body.email}).select("chat").exec();
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }

    // Push new message to database
    const chatlogs = user.chat;
    chatlogs.push({role: "user", content: req.body.message.content});
    await user.save();

    // Send request to OpenAI
    const messagesToSend = user.chat.toObject()
    const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY});
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messagesToSend
    });

    // Store response in database
    const gptResponse = completion.choices[0].message;
    chatlogs.push({role: gptResponse.role, content: gptResponse.content});
    await user.save();

    // Send back response
    res.status(202).json({
        response: gptResponse
    });
};

export default generateResponse;