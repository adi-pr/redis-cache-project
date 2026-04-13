import redis from "../redis.js";

export const getUserFromDB = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const [username, role] = await redis.hmget(id, 'name', 'role');

  return {
    id,
    name: username,
    role: role,
  };
};

export const updateUserInDB = async (id, username, role) => {
  const userObject = {
    name: username,
    role: role
  }
  
  await redis.hset(id, userObject)
}

export const createUser = async (username, role) => {
  const userId = crypto.randomUUID()
  
  const userObject = {
    name: username,
    role: role
  }
  
  await redis.hset(userId, userObject)

  return userId
}
