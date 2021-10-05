const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const app = express();

app.use(express.json());

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

app.get("/lists", async (req, res, next) => {
  try {
    const lists = await TodoList.findAll({
      include: [{ model: TodoItem }],
    });
    res.send(lists);
  } catch (e) {
    next(e); // pass error to express.
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    // define the id => get it from => req.params
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).send("Hey we didn't find your user");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    // name, password, email

    console.log(req.body); // body of the request will bring my data/
    const { email, name, password } = req.body;

    if (!email || !password) {
      res.status(400).send("Missing parameters to create a user");
    } else {
      const newUser = await User.create({ name, email, password });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(4000, () => console.log("Running!!"));
