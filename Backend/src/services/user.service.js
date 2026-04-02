const userRepository = require("../repositories/user.repository");

async function getCurrentUser(userId) {
  const user = await userRepository.findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

module.exports = {
  getCurrentUser,
};