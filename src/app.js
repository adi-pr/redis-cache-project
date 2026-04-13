import express from "express"
import router from "./routes/user.routes.js"
import { rateLimiter } from "./middleware/rateLimiter.js"

const app = express()

app.use(rateLimiter(5, 60))

app.use(express.json())
app.use("/", router)

app.listen(3000, () => {
  console.log("Server running in port 3000")
})