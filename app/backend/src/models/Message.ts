// Defines an object that can be used to store a message in the database
import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    role: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
});

const Message = model("Message", messageSchema);

export { messageSchema, Message };