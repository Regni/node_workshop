import fs from "fs";

let jsonText = JSON.parse(fs.readFileSync("./text/text.json", "utf-8"));

console.log(jsonText);
