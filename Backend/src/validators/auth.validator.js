function validateRegister(data) {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    return "Name, email, and password are required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
}

function validateLogin(data) {
  const { email, password } = data;

  if (!email || !password) {
    return "Email and password are required";
  }

  return null;
}

module.exports = {
  validateRegister,
  validateLogin,
};