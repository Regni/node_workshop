let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("how much is your saldo: ", (_number2) => {
  readInput.question("how much does it cost: ", (_number1) => {
    const total = parseInt(_number2) - parseInt(_number1);
    total > -1
      ? console.log(`you had enough to pay and your new saldo is ${total} `)
      : console.log(`you did not enough money you are missing ${0 - total}`);

    readInput.close();
  });
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
