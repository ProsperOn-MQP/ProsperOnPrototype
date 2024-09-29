// Defines an object that can be used to add a user profile to database
import { Schema, model } from "mongoose";

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
    }
});

const User = model("Student", studentSchema);

export default User;