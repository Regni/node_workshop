let oHTTP = require("http");
let oFileStream = require("fs");

//version 1
let server = oHTTP.createServer().listen(3000);

console.log("Server started...");
console.log("enter --> localhost:3000 <-- in your browser");

//for small files and using it locally. Not in production.
server.on("request", (_request, _response) => {
  let readStream = oFileStream.createReadStream(
    "./files/largeFile.txt",
    "utf-8"
  );
  readStream.on("data", (chunk) => {
    _response.write(chunk);
  });
  readStream.on("end", () => {
    _response.end(console.log("stream ended"));
  });
});
