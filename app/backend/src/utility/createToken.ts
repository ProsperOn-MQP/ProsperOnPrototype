import jwt from "jsonwebtoken";

// Creates a json web token for token authentication
function createToken(email: string) {
    const payload = {
        email: email
    };
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return token;
}

export default createToken;

