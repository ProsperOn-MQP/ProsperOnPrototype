import jwt from "jsonwebtoken";

// Returns payload from a given token
function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_KEY);
}

export default decodeToken;
