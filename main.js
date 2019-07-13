const crypto = require('./crypto')

async function getInfo() {
  try {
    const btcEur = await crypto.currentBtcInEur()
    const bList = await crypto.getBtcBought()
    const gL = crypto.currentGainLoss(btcEur, bList)
    return [btcEur, gL]
  } catch (error) {
    console.error(error)
  }
}

exports.getInfo = getInfo
