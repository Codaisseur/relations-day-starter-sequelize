const { Router } = require("express")
const router = new Router()

//model imports
const User = require("../models").user;
const TodoList = require("../models").todoList;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{ model: TodoList }],
    });
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
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

router.post("/", async (req, res, next) => {
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

router.patch("/:id", async (request, response, next) => {
  try {
  const { id } = request.params
  const user = await User.findByPk(parseInt(id))

  const { name, password } = request.body
  
  if (!user){
    response.status(404).send("User not found")
  } else {
    await user.update({name, password})
    response.send(user)
  }

  } catch (e){
    next(e)
  }
})

router.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params
    const user = await User.findByPk(id)

    if(!user){
      response.status(404).send("User not found")
    } else {
      await user.destroy()
      response.send(user)
    }

  } catch(e) {
    next(e)
  }
})

module.exports = router