import jwt from "jsonwebtoken";

// Returns payload from a given token
function decodeToken(token): {email?: string;} {
  return jwt.verify(token, process.env.JWT_KEY) as {email?: string};
}

export default decodeToken;
