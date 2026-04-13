# redis-cache-project

Personal Redis learning sandbox

## About
This repository is my personal playground for learning Redis. It isn't intended to be a production-ready project — it's a place for notes, experiments, small scripts, and example snippets to help me explore Redis concepts and patterns.

## Goals
- Explore core Redis data structures and commands.
- Practice common caching patterns and eviction strategies.
- Try out pub/sub and Redis Streams for simple messaging.
- Experiment with persistence options and performance tuning.
- Keep short, focused examples and notes I can refer back to.


## Getting started (local)
A quick way to run Redis locally using Docker:
- Start Redis:
  - `docker run --name redis -p 6379:6379 -d redis:latest`
- Connect with the CLI:
  - `docker exec -it redis redis-cli`
- Basic commands to try:
  - `SET mykey "hello"`
  - `GET mykey`
  - `EXPIRE mykey 60` (set TTL)
  - `PUBLISH mychannel "hi"` (with a subscriber listening)

## Notes / Conventions
- This is a personal learning repo: expect incomplete examples and frequent changes.
- Nothing here should be assumed production-ready.

## Resources
- Official Redis documentation: https://redis.io/docs/
- Redis commands reference and tutorials available on the official site.

---
Made as a personal sandbox to learn and explore Redis.