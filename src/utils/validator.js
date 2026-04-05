function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\+?[0-9]{7,15}$/.test(phone);
}

function validateRequired(value, fieldName) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`${fieldName} es obligatorio`);
  }
  return true;
}

module.exports = { validateEmail, validatePhone, validateRequired };
