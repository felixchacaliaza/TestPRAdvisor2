const crypto = require("crypto");

function generateToken(identifier) {
  return crypto.createHash("sha256").update(identifier + Date.now()).digest("hex");
}

function verifyToken(token) {
  return typeof token === "string" && token.length === 64;
}

module.exports = { generateToken, verifyToken };
