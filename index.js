const express = require("express");
const TodoItem = require("./models").todoItem;

const port = 4000

const app = express();

//import router
const userRouter = require("./routers/users")
const listsRouter = require("./routers/lists")


const myMiddleware = (request, response, next) => {
  console.log("In middleware")
  next()
}

//here we generate a random numberr
//based on the number we decide if the user can access or not
const randomMiddleware = (request, response, next) => {

  //generating random number
  const randomNumber = Math.random() * 11
  console.log(randomNumber)

  if (randomNumber > 5){
    console.log("not authorized")
    response.status(401).send()
  } else {
    console.log("welcome")
    next()
  }
}

//middleware
app.use(express.json());  //parsing the body for POST and PUT requests

//if we pass the middleware here
//it will be used by all endpoints
app.use(myMiddleware)

app.get("/", async (request, response, next) => {
  response.send("Hello from Todo API")
})

app.get("/test", async (req, res, next) => {
  res.send("Hellooooo");
});

//registering our routers

//here the middleware is only used by the userRouter
app.use("/users", randomMiddleware, userRouter)
app.use(listsRouter)


app.listen(port, () => console.log(`Running on ${port}!!`));
