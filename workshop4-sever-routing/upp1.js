let http = require("http");

let server = http.createServer((aRequest, aRespons) => {
  aRespons.end("this works?");
  console.log("request recieved");
});

server.listen(8000, "localHost", () => {
  console.log("server started");
});
