const crypto = require('./crypto')


async function run() {
  try {
    const btcEur = await crypto.currentBtcInEur()
    const bList = await crypto.getBtcBought()
    const gL = crypto.currentGainLoss(btcEur, bList)
    console.log(btcEur, gL)
  } catch (error) {
    console.error(error)
  } 
}

run()
