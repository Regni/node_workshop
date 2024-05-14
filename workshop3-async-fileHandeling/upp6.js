let fs = require("fs");

let data = {
  test: "a lot of text here",
  title: "the title of a lot of text",
  oof: true,
};

fs.writeFile("./text/newJson.json", JSON.stringify(data), (aError) => {
  if (aError) {
    return console.error(aError);
  }
  console.log("file created");
});
