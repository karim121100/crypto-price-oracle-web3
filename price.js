const prices = {};

function savePrice(data) {
  prices[data.symbol] = data;
}

function getPrice(symbol) {
  return prices[symbol];
}

function getAllPrices() {
  return prices;
}

module.exports = {
  savePrice,
  getPrice,
  getAllPrices
};
