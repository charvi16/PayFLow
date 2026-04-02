function validateTopup(data) {
  const { amount } = data;

  if (amount === undefined) {
    return "Amount is required";
  }

  if (Number(amount) <= 0) {
    return "Amount must be greater than 0";
  }

  return null;
}

module.exports = {
  validateTopup,
};