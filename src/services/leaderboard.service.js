import redis from "../redis.js";

const KEY = "leaderboard:global";

export const addScore = async (user, score) => {
  await redis.zadd(KEY, Number(score), user)
};

export const incrementScore = async (user, points) => {
  await redis.zincrby(KEY, Number(points), user)
};

export const getTopUsers = async (limit = 10) => {
  return await redis.zrevrange(KEY, 0, limit - 1, "WITHSCORES");
};

export const getUserRank = async (user) => {
  const rank = await redis.zrevrank(KEY, user)
  return rank !== null ? rank + 1 : null
};