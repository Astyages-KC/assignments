const express = require('express')
const app = express()

//server route to handle a get request to a specific endpoint
app.get("/", (request, response) => {
    response.send('Hello!!! Utah!')
})

app.get("/", (req, res) => {
    res.send({name: "steve", age: 20})
})



//listen takes port number and callback
app.listen(7000, () => {
    console.log('Server is running on port 7000')
})