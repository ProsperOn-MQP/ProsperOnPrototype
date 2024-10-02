import OpenAI from "openai";

console.log(process.env.OPEN_AI_KEY); 
const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY});

const messages = [
    { role: "system", content: "You are a fintech buddy for students participating at WPI's FinTech project center."}
]

export {openai, messages};