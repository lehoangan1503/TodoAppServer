const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

//get all tasks
router.get("/", (req, res, next) => {});

//add new task to Todo
router.post("/add_a_task", (req, res, next) => {
  taskController.insertNewTask(req, res, next);
});
module.exports = router;
