const mongoose = require("mongoose");
const Todo = require("./TodoModel");
const User = require("../users/User");

module.exports = {
  createTodo: async (req, res) => {
    try {
      let newTodo = new Todo({ todo: req.body.todo });
      let savedTodo = newTodo.save();

      let foundUser = await User.findById(req.body._id);

      foundUser.todos.push(savedTodo);

      await foundUser.save();

      res.json(savedTodo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  getAllUserTodos: async (req, res) => {
    console.log(req.query)
    try {
      let allUserTodos = await User.findById(req.params.id)
        .populate("todos", "todo")
        .select("-password -__v");

      res.json(allUserTodos);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};
