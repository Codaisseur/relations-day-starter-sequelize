const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todoList;

const app = express();

app.get("/test", async (req, res, next) => {
  res.send("Hellooooo");
});

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{ model: TodoList }],
    });
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.listen(4000, () => console.log("Running!!"));
