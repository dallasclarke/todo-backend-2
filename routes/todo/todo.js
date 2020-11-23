const express = require("express");
const router = express.Router();
const { createTodo, getAllUserTodos } = require("./todoController");

/* GET home page. */
router.get("/get-user-all-todos/:id", getAllUserTodos);

router.post("/create-todo", createTodo);

module.exports = router;
