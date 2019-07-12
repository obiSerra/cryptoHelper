const crypto = require('./crypto')
const { exec } = require('child_process');

async function run() {
  try {
    const btcEur = await crypto.currentBtcInEur()
    const bList = await crypto.getBtcBought()
    const gL = crypto.currentGainLoss(btcEur, bList)
    console.log(btcEur, gL)

    exec('termux-notification --sound --vibrate 500 --content "Guadagno: ' + gL + ' In Euro: ' + btcEur + '"')
  } catch (error) {
    console.error(error)
  } 
}

run()
