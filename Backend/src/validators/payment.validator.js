function validateTransfer(data) {
  const { receiverEmail, amount } = data;

  if (!receiverEmail || amount === undefined) {
    return "receiverEmail and amount are required";
  }

  if (Number(amount) <= 0) {
    return "Amount must be greater than 0";
  }

  return null;
}

module.exports = {
  validateTransfer,
};