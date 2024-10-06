import createToken from "../utility/createToken.js";
import Student from "../models/Student.js";

// Validates the credentials of a user
const validateLogin = async (req, res) => {
  const foundStudent = await Student.findOne({email: req.body.email}).exec();

  if (foundStudent != undefined) {
    if (foundStudent.email == req.body.email && foundStudent.password == req.body.password) {
      res.cookie("authCookie", createToken(foundStudent.email), {
        httpOnly: true,
        secure: true,
        signed: true
      });
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