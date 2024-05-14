let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("enter number 1: ", (_number1) => {
  readInput.question("enter number 2: ", (_number2) => {
    console.log(
      `${_number1} + ${_number2} = ${parseInt(_number1) + parseInt(_number2)}`
    );
    readInput.close();
  });
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
