const { updatePrice } = require("./oracle");
const { getAllPrices } = require("./price");
const { logInfo } = require("./logger");

function startApp() {
  logInfo("Starting Crypto Price Oracle");

  updatePrice("BTC", 43000);
  updatePrice("ETH", 2300);

  const prices = getAllPrices();
  logInfo("Current Prices:");
  console.log(prices);
}

startApp();
