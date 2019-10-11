const express = require('express')
const app = express()
const morgan = require('morgan')



//middlewear - turns the request body JSON into a JS object
// makes it available in the request.body ( req.body )
app.use(express.json())
app.use(morgan("dev"))

//Routes
app.use("/todos", require('./routes/todoRouter.js'))


app.listen(7000, () => {
    console.log('Server is running on port 7000')
})