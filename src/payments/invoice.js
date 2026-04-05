function generateInvoice(cart, userId, total) {
  return {
    id: `INV-${Date.now()}`,
    userId,
    items: cart.items,
    total,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { generateInvoice };
