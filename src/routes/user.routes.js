import express from "express";
import redis from "../redis.js";
import { getUserFromDB } from "../services/user.service.js";

const router = new express.Router()

router.get("/user/:id", async (req, res) => {
  const { id } = req.params
  const key = `user:${id}`
  
  // Check redis cache
  const cached = await redis.get(key)
  
  if (cached) {
    console.log("CACHE HIT")
    return res.json(JSON.parse(cached))
  }
  
  // Fetch from DB
  const user = await getUserFromDB(id)
  
  // Stores in redis cache 
  await redis.set(key, JSON.stringify(user), "EX", 60)
  
  return res.json(user)
})

export default router