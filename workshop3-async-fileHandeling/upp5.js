let fs = require("fs");

fs.readFile("./text/text.json", (aError, aData) => {
  if (aError) {
    return console.error(aError);
  }

  console.log(JSON.parse(aData));
});

console.log("ended");
