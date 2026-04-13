import redis from "../redis.js";

export const rateLimiter = (limit = 10, window = 60) => {
  return async (req, res, next) => {
    const ip = req.ip;
    const key = `rate:${ip}`;

    const current = await redis.incr(key);

    if (current === 1) {
      await redis.expire(key, window);
    }

    if (current > limit) {
      return res.status(429).json({
        message: "Too many requests, slow down",
      });
    }

    next();
  };
};