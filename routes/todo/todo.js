const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtChecker = require('../utils/jwtChecker');
const {
  createTodo,
  getAllUserTodos,
  deleteTodo,
  updateTodo,
} = require("./todoController");

/* GET home page. */
router.get(
  "/get-user-all-todos",
  jwtChecker,
  getAllUserTodos
);

//router.get("/get-user-all-todos/:id", getAllUserTodos);

router.post("/create-todo", createTodo);

// router.delete("/delete-todo/:userID/:todoID", deleteTodo);

router.delete("/delete-todo", deleteTodo);

router.put("/update-todo", updateTodo);

module.exports = router;
