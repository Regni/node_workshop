const { log } = require("console");
let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("enter weight in grams: ", (weight) => {
  const numberWeight = parseInt(weight);
  numberWeight < 20
    ? console.log("this package will cost 5kr to send")
    : weight < 100
    ? console.log("this package will cost 10kr to send")
    : console.log("this package will cost 20kr to send");

  readInput.close();
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
