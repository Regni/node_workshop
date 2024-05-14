import * as oFileStream from "fs";

let textIn = oFileStream.readFileSync("./text/myTextFile.txt", "utf-8");

console.log(textIn);
console.log("end program");
