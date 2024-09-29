import app from "../app.js";
import Student from "../models/Student.js";

app.post("/login", async (req, res) => {
    try {
        const emailAddress = req.body.email;
        const student = await Student.find({email: emailAddress});
        res.json({message: "found"});

    }
    catch {

    }
})

