const Task = require("../models/taskModel");

module.exports = {
  //method to add new task to existed todo with todoId
  insertNewTask: (req, res, next) => {
    const newTask = new Task({
      name: req.body.name,
      todoId: req.body.todoId,
    });
    newTask.save((err) => {
      if (err) {
        res.json({
          result: "failed",
          message: `can not insert new task. Error is ${err}`,
        });
        return;
      }
      res.json({
        result: "ok",
        data: {
          name: req.body.name,
          todoId: req.body.todoId,
        },
        message: `insert new task to Todo with id ${req.body.todoId} successfully`,
      });
    });
  },
};
