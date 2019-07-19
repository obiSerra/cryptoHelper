const private = require("./private");
const KrakenClient = require("kraken-api");

const key = private.key;
const secret = private.secret;
const kraken = new KrakenClient(key, secret);

async function balanceTarget() {
  return 650;
}

async function getBtcBought() {
  // TODO connect to API
  const orders = await kraken.api("ClosedOrders", { start: "1563532707" });
  const closed = orders.result.closed;
  for (let k in closed) {
    const c = closed[k];
  }

  return [200];
}

async function currentBalance() {
  try {
    const resp = await kraken.api("Balance");
    return resp.result;
  } catch (error) {
    console.log("[!] current balance error");
    console.log(error);
    return false;
  }
}

async function currentValue(pair = "XXBTZEUR") {
  try {
    const ticker = await kraken.api("Ticker", { pair });
    return +ticker.result[pair].c[0];
  } catch (error) {
    console.log("[!] Current Value error");
    console.log(error);
    return false;
  }
}

async function currentBtcInEur() {
  const [cVal, cBal] = await Promise.all([currentValue(), currentBalance()]);
  const cBtc = +cBal.XXBT;
  const cEur = +cBal.ZEUR;
  const cBtcEur = Math.floor((cBtc * cVal + cEur) * 100) / 100;

  return cBtcEur;
}

function currentGainLoss(btcEur, bList) {
  const totalSpent = bList.reduce((acc, v) => {
    acc += v;
    return acc;
  }, 0);
  return btcEur - totalSpent;
}

exports.currentBtcInEur = currentBtcInEur;
exports.currentGainLoss = currentGainLoss;
exports.getBtcBought = getBtcBought;
exports.balanceTarget = balanceTarget;
