const analyticsService = require("../services/analytics.service");
const { success, fail } = require("../utils/response");

async function getSummary(req, res) {
  try {
    const summary = await analyticsService.getMySummary(req.user.id);
    return success(res, "Analytics summary fetched successfully", summary);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  getSummary,
};