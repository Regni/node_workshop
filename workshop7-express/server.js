import express from "express";

let app = express();

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

app.get("/", (request, response) => {
  response.status(200).send("My name is ...");
});

app.get("/api/users", (request, response) => {
  const {
    query: { filter, value },
  } = request;

  console.log(filter);
  response.send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
  const parsedID = parseInt(request.params.id);
  if (isNaN(parsedID))
    return response.status(400).send({ msg: "bad request. invalid ID." });
  const selectedUser = mockUsers.find((user) => user.id == parsedID);
  if (!selectedUser) return response.sendStatus(404);
  return response.send(selectedUser);
});

app.get("/usersfilter", (request, response) => {
  const { firstName, nickName } = request.query;

  if (firstName && !nickName) {
    const selectedUser = mockUsers.find(
      (user) =>
        user.firstName.toLocaleLowerCase() === firstName.toLocaleLowerCase()
    );
    console.log(selectedUser);
    return response.send(selectedUser);
  }
  if (nickName && !firstName) {
    const selectedUser = mockUsers.find(
      (user) =>
        user.firstName.toLocaleLowerCase() === nickName.toLocaleLowerCase()
    );
    console.log(selectedUser);
    return response.send(selectedUser);
  }
  if (nickName && firstName) {
    const filterUsers = mockUsers.filter(
      (user) =>
        user.firstName.includes(firstName) || user.nickName.includes(nickName)
    );
    return response.send(filterUsers);
  }

  response.send(mockUsers);
});

app.get("/usersfilter/:firstName/:nickName", (request, response) => {
  const { firstName, nickName } = request.params;

  if (firstName === nickName)
    return response.send(
      `Your nickname and first name are the same, ${firstName}`
    );
  return response.send(
    `Your nickname is ${nickName} and your first name is ${firstName}, they are not the same!`
  );
});

app;

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server started... localhost:${PORT}`);
});
