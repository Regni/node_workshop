import express from "express";

const app = express();

let mockUsers = [
  {
    id: 1,
    firstName: "Mark",
    lastName: "Walker",
    nickName: "Mark",
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Sail",
    nickName: "Maria",
  },
  {
    id: 3,
    firstName: "January",
    lastName: "Day",
    nickName: "Jan",
  },
];

const PORT = 3200;
app.listen(PORT, () => {
  console.log("sever started...");
});

app.get("/hello", (_request, _response) => {
  _response.send("Hello world!");
});

app.get("/hello/:name", (_request, _response) => {
  let name = _request.params.name;
  _response.send(name);
});

app.get("/data", (_request, _response) => {
  _response.json(mockUsers);
});

app.get("/greet", (_request, _response) => {
  _response.redirect("/hello");
});

app.get("/time", (_request, _response) => {
  let time = new Date();
  console.log(time.toTimeString().slice(0, 2));
  if (parseInt(time.toTimeString().slice(0, 2)) < 12) {
    return _response.send(`Good Morning the time is ${time.toTimeString()}`);
  }

  return _response.send(`Good afternoon the time is ${time.toTimeString()}`);
});

app.get("/squared", (_request, _response) => {
  const number = parseInt(_request.query.number);
  const power = parseInt(_request.query.power);
  const numberSquard = number ** power;
  _response.send(`${numberSquard}`);
});
