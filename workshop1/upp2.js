const { log } = require("console");
let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("pls enter your name...\n", (_name) => {
  console.log("-----------------------");
  console.log(`you entered: ${_name}`);
  readInput.close();
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
