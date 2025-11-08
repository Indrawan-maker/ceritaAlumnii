import express from "express"
import { register, login, profile } from '../controllers/authController.js'
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get("/profile", authMiddleware, profile)

export default router