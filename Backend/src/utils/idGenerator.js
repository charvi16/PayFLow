function generateTxRef() {
  return `TX-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

module.exports = { generateTxRef };