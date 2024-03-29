const mainLib = require("./main");
const { exec } = require("child_process");

async function run() {
  try {
    const s = await mainLib.getInfo();

    exec('termux-notification --sound --vibrate 500 --content "' + s + '"');
  } catch (error) {
    console.error(error);
  }
}

run();
