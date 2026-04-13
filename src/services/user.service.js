export const getUserFromDB = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id,
    name: "John Doe",
    role: "developer",
  };
};
