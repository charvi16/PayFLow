const userService = require("../services/user.service");
const { success, fail } = require("../utils/response");

async function getMe(req, res) {
  try {
    const user = await userService.getCurrentUser(req.user.id);
    return success(res, "User profile fetched successfully", user);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  getMe,
};