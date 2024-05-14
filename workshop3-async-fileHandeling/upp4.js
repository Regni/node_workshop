let fs = require("fs");

fs.unlink("./text/written.txt", (aError) => {
  if (aError) {
    return console.error(aError);
  }
  console.log("file deleted successfully");
});

console.log("end");
