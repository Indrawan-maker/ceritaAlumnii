import { verifyToken } from "../services/jwtServices.js"


export const authMiddleware = (req, res, next) => {
    // get authorization header
    console.log(req.headers)
    const authHeader = req.headers["authorization"]
    if(!authHeader) {
        return res.status(401).json({message: 'no token provided'})
    }
        // Step 2: Extract token from format 'Bearer <token>'
        const token = authHeader.split(" ")[1]
        console.log(token)
        if(!token) {
            return res.status(401).json({ message: "malformed token"})
        }

        try {
            // Step 3: Verify token using jwtService
            const decoded = verifyToken(token)
            // Step 4: Attach decoded user info to request object
            req.user = decoded
            console.log(req.user)
            next()
        } catch(error) {
            console.log('error verifyng token', error)
            // If token is invalid or expired
            res.status(401).json({ message: "Invalid or expired token"})
        }
}