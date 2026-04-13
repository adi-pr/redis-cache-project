import express from "express"
import userRouter from "./routes/user.routes.js"
import leaderboardRouter from "./routes/leaderboard.routes.js"

import { rateLimiter } from "./middleware/rateLimiter.js"

const app = express()

app.use(rateLimiter(5, 60))

app.use(express.json())
app.use("/", userRouter)
app.use("/leaderboard", leaderboardRouter)

app.listen(3000, () => {
  console.log("Server running in port 3000")
})