const { logger } = require("../utils/logger");

function processRefund(invoiceId, reason) {
  if (!invoiceId) {
    throw new Error("Se requiere ID de factura para la devolución");
  }
  logger.info(`Procesando devolución de factura ${invoiceId}: ${reason}`);
  return { success: true, invoiceId, refundedAt: new Date().toISOString() };
}

module.exports = { processRefund };
