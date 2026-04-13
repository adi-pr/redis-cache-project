import express from "express"
import router from "./routes/user.routes.js"
import { rateLimter } from "./middleware/rateLimiter.js"

const app = express()

app.use(rateLimter(5, 60))

app.use(express.json())
app.use("/", router)

app.listen(3000, () => {
  console.log("Server running in port 3000")
})