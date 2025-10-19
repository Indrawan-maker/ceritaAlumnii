import express from "express"
import cors from "cors"

const app = express()
const PORT = 5174

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const { fullname, nickname, email, password} = req.body

    if(!fullname || !nickname || !email || !password) {
        return res.status(400).json({message: 'please complete the input'})
    }
    console.log(`data received from frontend: ${req.body}`)

    res.status(201).json({message: "registrasi berhasil happy coding"})
})

app.get("/login", (req, res) => {
    res.json({message: "hello from server"})
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))