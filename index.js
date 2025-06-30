import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
import mongoose from "mongoose"
import Contact from "./routes/Contact.js"
import cors from "cors"

// Apply CORS middleware
app.use(cors())

app.use(express.json())
app.use('/api', Contact)

app.get("/", (req, res) => {
    console.log("hello server")
    res.send("Server started")
})

mongoose.connect(process.env.MONGOURI)
.then(() => {
    console.log('Connected with database')
})
.catch(() => {
    console.log("disconnected with db")
})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))