import Student from "../models/Student.js";
import initialStudents from "../data/students.js";

// Adds existing users to database (if there are none)
async function seedDatabase() {
    try {
        // Query Student collection for any all student documents
        const students = await Student.find({}).exec();
        
        // If none, insert default student data set.
        if (students.length == 0) {
            await Student.create(initialStudents);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default seedDatabase;

