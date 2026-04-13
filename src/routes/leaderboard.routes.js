import express from 'express'
import { addScore, incrementScore, getTopUsers, getUserRank } from '../services/leaderboard.service.js'

const router = express.Router()

router.post('/score', async (req, res) => {
  const { user, score } = req.body
  await addScore(user, score)
  res.json({ message: 'Score added successfully' })
})

router.post('/increment', async (req, res) => {
  const { user, points } = req.body
  await incrementScore(user, points)
  res.json({ message: 'Score incremented successfully' })
})

router.get("/top", async (req, res) => {
  const data = await getTopUsers();
  res.json(data);
});

router.get("/rank/:user", async (req, res) => {
  const rank = await getUserRank(req.params.user);
  res.json({ user: req.params.user, rank });
});

export default router
