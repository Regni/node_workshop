let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("please enter your name...\n", (_name) => {
  console.log("-------------------------------");
  console.log(`you entered: ${_name}`);
  readInput.question("Please enter your age...\n", (_age) => {
    console.log("--------------------");
    console.log(`You entered: ${_age} and your name is ${_name}`);
    readInput.close();
  });
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
