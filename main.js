const crypto = require("./crypto");

async function getInfo() {
  try {
    const btcEur = await crypto.currentBtcInEur();
    const bt = await crypto.balanceTarget();
    const delta = Math.round((btcEur - bt) * 100) / 100;
    return `Bilancio: ${btcEur} Delta: ${delta}`;
  } catch (error) {
    console.error(error);
  }
}

exports.getInfo = getInfo;
