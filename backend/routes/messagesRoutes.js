import express from 'express'
import { createMessage, getMessage } from '../controllers/messageControllers.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/', authMiddleware, createMessage)
router.get('/', getMessage)

export default router