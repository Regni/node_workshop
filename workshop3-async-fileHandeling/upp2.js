let fs = require("fs");

let data = "lets write htis";

fs.writeFile("./text/written.txt", data, (aError) => {
  aError ? console.error(aError) : console.log(data.toString());
});

console.log("program done");
