const express = require('express')
const app = express()
const uuid = require('uuid/v4')

const todos = [
    {
    "name": "",  
    "description": "",
    "imageUrl": "",
    "completed": false,
    "_id": uuid()
}
]

//middlewear
app.use(express.json())


app.get ("/todos", (req, res) => {
    res.send(todos)
})

app.get("/todos/:_id", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

app.post("/todos", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete("/todos/:_id", (req, res) => {
    const todoID = req.params._id
    const todoIndexDelete = todos.findIndex(todo => todo._id === todoID)
    console.log(todos[todoIndexDelete])
    const todoName = todos[todoIndexDelete].name
    
    todos.splice(todoIndexDelete, 1)

    res.send(`Successfully deleted ${todoName}`)
})

app.put("/todos/:_id", (req, res) => {
    const todoID = req.params._id
    const todoToUpdate = todos.find(todo => todo._id === todoID)
    const todoIndexUpdate = todos.findIndex(todo => todo._id === todoID)
    const  updateTodo = Object.assign(todoToUpdate, req.body)
    todos.splice(todoIndexUpdate, 1, updateTodo)
    res.send(updateTodo)

})


app.listen(7000, () => {
    console.log('Server is running on port 7000')
})