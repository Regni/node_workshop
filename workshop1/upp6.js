let oReadline = require("readline");

let readInput = oReadline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question("enter age: ", (age) => {
  const numberAge = parseInt(age);
  numberAge > 16 && numberAge < 65
    ? console.log(`ticket cost is 35kr`)
    : console.log(`ticket cost is 20kr`);
  readInput.close();
});

readInput.on("close", () => {
  console.log("\n");
  console.log("App closed, bb");
  process.exit(0);
});
