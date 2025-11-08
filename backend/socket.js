import { Server } from "socket.io"
import { createServer } from "http"
import app from "./app.js"

const server = createServer(app)

export const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    console.log(`berhasil connect ke socket brok dengan id ${socket.id}`)
    socket.emit("chat-message", "socket io is fucking running")
})

export default server