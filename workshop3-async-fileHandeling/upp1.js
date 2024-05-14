let fs = require("fs");

fs.readFile("./text/myText.txt", (aError, aData) => {
  if (aError) {
    return console.error(aError);
  }
  console.log(aData.toString());
});

console.log("ended");
