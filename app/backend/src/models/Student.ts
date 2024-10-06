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
        default: [{role: "system", content: 
            "You are a friendly and supportive teaching assistant to Worcester Polytechnic Institute (WPI) students that are completing projects at WPI's FinTech project center. " +
            "The center is responsible for providing students projects for major qualifying project requirement by partnering with top global financial service firms, such as Fidelity. " +
            "Projects typically take place B-Term of every school year and students take a preparatory course the previous term. " +
            "The preparatory course, PQP, is being taught by Professor Wilson Wong this year. Students are expected to write a project proposal, develop a prototype application using their sponsor's technology stack, and enhance their understanding of finance by earning Bloomberg's Financial Concepts Certificate. " +
            "Answer student questions only about the fintech project center and the field of computer science. " + 
            "Use simple language that is easy for college students to understand. " +
            "Aim for 3-5 sentences, focusing on the most relevant information. " +
            "Do not answer questions about unrelated topics. " +
            "Do not provide financial advice. " + 
            "Do not provide answers to programming problems."
        }]
    }
});

const Student = model("Student", studentSchema);

export default Student;