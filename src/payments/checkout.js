const { logger } = require("../utils/logger");
const { generateInvoice } = require("./invoice");

function processCheckout(cart, userId) {
  if (!cart || cart.items.length === 0) {
    throw new Error("El carrito está vacío");
  }
  const total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  logger.info(`Procesando pago de $${total} para usuario ${userId}`);
  const invoice = generateInvoice(cart, userId, total);
  return { success: true, total, invoice };
}

module.exports = { processCheckout };
