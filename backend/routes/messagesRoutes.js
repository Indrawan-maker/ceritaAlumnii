import express from 'express'
import { createMessage, getMessage } from '../controllers/messageControllers.js'

const router = express.Router()

router.post('/api/messages', createMessage)
router.get('/api/messages', getMessage)

export default router