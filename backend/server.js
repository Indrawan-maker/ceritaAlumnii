import express from "express"
import cors from "cors"

const app = express()
const PORT = 5137


app.get("/register", (req, res) => {
    res.json({message: "hello from server"})
})

app.get("/login", (req, res) => {
    res.json({message: "hello from server"})
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))