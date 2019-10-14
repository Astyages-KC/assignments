const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000



//middlewear
app.use(express.json())
app.use(morgan('dev'))
// database connection
mongoose.connect("mongodb://localhost:27017/bountydb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
},
() => console.log('Connected to the DB'))

app.use("/bounties", require('./routes/bountyRouter.js'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(PORT, () => {
    console.log('Server is running on port 7000')
})