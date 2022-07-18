const Todo = require("../models/todoModel");

module.exports = {
  insertNewTodo: (req, res, next) => {
    const newTodo = new Todo({
      name: req.body.name,
      priority: req.body.priority,
      description: req.body.description,
    });
    newTodo.save((err) => {
      if (err) {
        res.json({
          result: "failed",
          message: `can not insert new todo. Error is ${err}`,
        });
        return;
      }
      res.json({
        result: "ok",
        data: {
          name: req.body.name,
          priority: req.body.priority,
          description: req.body.description,
        },
        message: "insert new todo successfully",
      });
    });
  },
  getAllToDoList: (req, res, next) => {
    Todo.find({})
      .limit(20)
      .sort({ name: 1 })
      .exec((err, resultData) => {
        if (err) {
          res.json({
            result: "failed",
            data: resultData,
            message: `Get todo list failed. Error is ${err}`,
          });
          return;
        }
        res.json({
          result: "ok",
          data: resultData,
          message: "get todo list successfully",
        });
      });
  },
};
