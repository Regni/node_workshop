let fs = require("fs");

let textIn = fs.readFileSync("./text/myTextFile.txt");

fs.writeFileSync("./text/testWrite.txt", textIn, "utf-8");
