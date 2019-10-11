const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid/v4')

const todos = [
    {
    name: "Frank",  
    description: "Burns",
    imageUrl: "https://image.stuff",
    completed: false,
    _id: uuid()
}
]

todoRouter.route("/")
.get ((req, res) => {
    res.send(todos)
})
.post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

todoRouter.route("/:_id")
.get((req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})
.delete((req, res) => {
    const todoID = req.params._id
    const todoIndexDelete = todos.findIndex(todo => todo._id === todoID)
    const todoName = todos[todoIndexDelete].name
    todos.splice(todoIndexDelete, 1)
    res.send(`Successfully deleted ${todoName}`)
})
.put((req, res) => {
    const todoID = req.params._id
    const todoToUpdate = todos.find(todo => todo._id === todoID)
    const todoIndexUpdate = todos.findIndex(todo => todo._id === todoID)
    const  updateTodo = Object.assign(todoToUpdate, req.body)
    todos.splice(todoIndexUpdate, 1, updateTodo)
    res.send(updateTodo)
})

module.exports = todoRouter