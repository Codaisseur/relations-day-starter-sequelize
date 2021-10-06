const express = require("express");
const TodoItem = require("./models").todoItem;

const port = 4000

const app = express();

//import router
const userRouter = require("./routers/users")
const listsRouter = require("./routers/lists")

//middleware
app.use(express.json());  //parsing the body for POST and PUT requests

app.get("/", async (request, response, next) => {
  response.send("Hello from Todo API")
})

app.get("/test", async (req, res, next) => {
  res.send("Hellooooo");
});

app.use("/users", userRouter)
app.use(listsRouter)


app.listen(port, () => console.log(`Running on ${port}!!`));
