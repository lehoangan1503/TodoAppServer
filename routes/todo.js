const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

//get all todo list
router.get("/", (req, res, next) => {
  todoController.getAllToDoList(req, res, next);
});

//add new todo
router.post("/add_a_todo", (req, res, next) => {
  todoController.insertNewTodo(req, res, next);
});
module.exports = router;
