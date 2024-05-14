let fs = require("fs");

fs.unlink("./text/newJson.json", (aError) => {
  if (aError) {
    console.error(aError);
  }
  console.log("file deleted");
});
