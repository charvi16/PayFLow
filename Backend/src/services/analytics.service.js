const analyticsRepository = require("../repositories/analytics.repository");

async function getMySummary(userId) {
  return analyticsRepository.getTransactionSummaryByUserId(userId);
}

module.exports = {
  getMySummary,
};