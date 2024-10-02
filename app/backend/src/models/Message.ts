// Defines an object that can be used to store a message in the database
import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    role: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    }
}, {
    toObject: {
        transform: function(doc, ret) {
            delete ret._id;
            return ret;
        }
    }
});

const Message = model("Message", messageSchema);

export { messageSchema, Message };