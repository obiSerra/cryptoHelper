const mainLib = require("./main");
const { exec } = require("child_process");

async function run() {
  try {
    const str = await mainLib.getInfo();

    console.log(str);
  } catch (error) {
    console.error(error);
  }
}

run();
