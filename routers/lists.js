const { Router } = require("express")
const router = new Router ()

//model imports
const TodoList = require("../models").todoList;
const TodoItem = require("../models").todoItem

router.get("/lists", async (req, res, next) => {
  try {
    const lists = await TodoList.findAll({
      include: [{ model: TodoItem }],
    });
    res.send(lists);
  } catch (e) {
    next(e); // pass error to express.
  }
});


router.post("/todolists", async (request, response, next) => {
  try {
    const newList = await TodoList.create(request.body)
    response.json(newList) //same as response.send
  } catch (e) {
    next(e)
  }
})

module.exports = router