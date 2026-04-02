const app = require("./app");
const env = require("./config/env");
const logger = require("./config/logger");

app.listen(env.port, () => {
  logger.info(`Server running on http://localhost:${env.port}`);
  logger.info(`Swagger docs available at http://localhost:${env.port}/api-docs`);
});