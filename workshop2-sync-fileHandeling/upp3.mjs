import * as fs from "fs";

let addThis = "\nSo... how you doing?...";

fs.appendFileSync("./text/testWrite.txt", addThis, "utf-8");
console.log("ended");
