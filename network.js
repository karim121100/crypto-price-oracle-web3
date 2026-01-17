const { network } = require("./config");

function getNetwork() {
  return network;
}

module.exports = {
  getNetwork
};
