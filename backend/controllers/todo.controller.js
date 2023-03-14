const asyncHandler = require('express-async-handler')

const db = require("../models");
const Todo = db.todo;
const User = db.user;

const getTodos = asyncHandler(async (req, res) => {
const todos = await Todo.find({ user: req.user.id })
    res.status(200).json(todos)
})

const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
}
const todo = await Todo.create({
    task: req.body.task,
    isComplete: req.body.isComplete,
    uid: req.body.uid,
    date: req.body.date
})
    res.status(200).json(todo)
})

const updateTodo = asyncHandler(async (req, res) => {
const todo = await Todo.findById(req.params.id)

if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
}

  // Check for user
if (!req.user) {
    res.status(401)
    throw new Error('User not found')
}

  // Make sure the logged in user matches the todo user
if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
}

const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
})

res.status(200).json(updateTodo)
})

const deleteTodo = asyncHandler(async (req, res) => {
const booking = await Booking.findById(req.params.id)

if (!booking) {
    res.status(400)
    throw new Error('Todo not found')
}

  // Check for user
if (!req.user) {
    res.status(401)
    throw new Error('User not found')
}

  // Make sure the logged in user matches the todo user
if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
}

await todo.remove()

res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo,
}