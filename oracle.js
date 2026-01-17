const { savePrice } = require("./price");
const { shareFeed } = require("./feed");

function updatePrice(symbol, value) {
  const data = {
    symbol: symbol,
    price: value,
    time: new Date().toISOString()
  };

  savePrice(data);
  shareFeed(data);
}

module.exports = {
  updatePrice
};
