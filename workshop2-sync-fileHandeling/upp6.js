let fs = require("fs");

let data = {
  test: "a lot of text here",
  title: "the title of a lot of text",
  oof: true,
};

fs.writeFileSync("./text/newJson.json", JSON.stringify(data), "utf-8");
console.log("ended");
