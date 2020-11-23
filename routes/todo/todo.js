var express = require("express");
var router = express.Router();
var { createTodo, getAllUserTodos, deleteTodo } = require("./todoController");

/* GET home page. */
router.get("/get-user-all-todos", getAllUserTodos);

//router.get("/get-user-all-todos/:id", getAllUserTodos);

router.post("/create-todo", createTodo);

// router.delete("/delete-todo/:userID/:todoID", deleteTodo);

router.delete("/delete-todo", deleteTodo);

module.exports = router;
