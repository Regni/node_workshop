const { error } = require("console");
let fs = require("fs");
let data = "\nSo... how you doing?...";
fs.appendFile("./text/myText.txt", data, (aError) => {
  if (aError) {
    return console.error(aError);
  }

  console.log(`the following text was added to the file` + data);
});

console.log("end");
