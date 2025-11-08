import 'dotenv/config'
import server from "./socket.js"

server.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT}`))