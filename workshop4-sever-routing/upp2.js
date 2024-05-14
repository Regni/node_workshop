let http = require("http");
let fs = require("fs");

let html = fs.readFileSync("index.html", "utf-8");

let server = http.createServer((aRequest, aRespons) => {
  aRespons.write(html);
  aRespons.end();
});

server.listen(8000, "localHost", () => {
  console.log("server started");
});
