// Defines an object that can be used to add a student user to database
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

const studentSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 8,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    chat: {
        type: [messageSchema],
        default: [{role: "system", content: "You a fintech buddy to WPI students that are completing projects at WPI's FinTech project center. Be kind, clear, and succinct."}]
    }
});

const Student = model("Student", studentSchema);

export default Student;