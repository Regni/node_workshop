let fs = require("fs");

let currentData = fs.readFile("./text/newJson.json", (aError, aData) => {
  if (aError) {
    return console.error(aError);
  }

  let data = JSON.parse(aData);

  data.oof = false;

  fs.writeFile("./text/newJson.json", JSON.stringify(data), (eError) => {
    if (eError) {
      return console.error(eError);
    }
    console.log("file changed");
  });
});
