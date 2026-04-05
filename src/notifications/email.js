function sendEmail(to, subject, body) {
  if (!to || !subject) {
    throw new Error("Destinatario y asunto son obligatorios");
  }
  console.log(`[EMAIL] To: ${to} | Subject: ${subject}`);
  return { sent: true, to, subject };
}

module.exports = { sendEmail };
