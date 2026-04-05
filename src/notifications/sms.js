function sendSMS(phone, message) {
  if (!phone || !message) {
    throw new Error("Teléfono y mensaje son obligatorios");
  }
  console.log(`[SMS] To: ${phone} | Msg: ${message}`);
  return { sent: true, phone };
}

module.exports = { sendSMS };
