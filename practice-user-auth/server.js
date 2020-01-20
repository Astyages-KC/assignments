const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJWT = require('express-jwt')
const PORT = process.env.PORT || 7000;
require('dotenv').config()

// Middleware that fire on every request
app.use(express.json)  //req body
app.use(morgan("dev"))  //logger
app.use("/api/photo", require('./routes/photoRouter.js'))
app.use("/photo", require('./routes/publicPhotoRouter.js'))

//connect to DB
mongoose.connect("mongodb://localhost:27017/instajam",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    () => console.log("[+] Connected to the DB"))

// Routes
app.use("/auth", require('./routes/authRouter.js'))
app.use("/api", expressJWT({secret: process.env.SECRET}))

//Err handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthoizedErr"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Listen
app.listen(PORT, () => console.log(`[o] Server is running on port ${PORT} `))