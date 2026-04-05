const { validateEmail } = require("../utils/validator");
const { generateToken } = require("./token");

function login(email, password) {
  if (!validateEmail(email)) {
    throw new Error("Email inválido");
  }
  if (!password || password.length < 8) {
    throw new Error("Contraseña inválida");
  }
  const token = generateToken(email);
  return { success: true, token };
}

module.exports = { login };
