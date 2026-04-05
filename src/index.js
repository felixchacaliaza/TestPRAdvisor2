const { login } = require("./auth/login");
const { processCheckout } = require("./payments/checkout");
const { logger } = require("./utils/logger");

logger.info("Aplicación iniciada");

module.exports = { login, processCheckout };
