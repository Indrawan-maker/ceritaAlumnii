import express from "express"
import cors from "cors"

const app = express()

app.get("/api/login", (req, res) => {
    const {username, password} = req.body
    res.json()
})

const PORT = 8000


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))