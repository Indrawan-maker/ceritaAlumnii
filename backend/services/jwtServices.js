import jwt from 'jsonwebtoken'

// Function to generate a JWT
export const generateToken = (payload) => {
    // jwt.sign creates a signed token using our secret key from environment variables
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
}

// Function to verify a JWT
export const verifyToken = (token) => {
// jwt.verify checks if the token is valid and not expired
    return jwt.verify(token, process.env.JWT_SECRET)
}