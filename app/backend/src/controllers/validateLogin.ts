import Student from "../models/Student.js";

// Validates the credentials of a user
const validateLogin = async (req, res) => {
    const foundStudent = await Student.findOne({email: req.body.email}).exec();

  if (foundStudent != undefined) {
    if (foundStudent.email == req.body.email && foundStudent.password == req.body.password) {
      return res.status(200).json({
        success: true,
        message: "Valid credentials"
      });
    }
  }
  return res.status(401).json({
    success: false,
    message: "Incorrect email address or password."
  });
}

export default validateLogin;