const mainLib = require('./main')
const { exec } = require('child_process');

async function run() {
  try {

    const [btcEur, gL] = await mainLib.getInfo()

    exec('termux-notification --sound --vibrate 500 --content "Guadagno: ' + gL + ' In Euro: ' + btcEur + '"')
  } catch (error) {
    console.error(error)
  }
}

run()
