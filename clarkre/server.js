const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000;

//Middleware for every request
app.use(express.json());
app.use(morgan('dev'));

//DB collection
mongoose.connect('mongodb://localhost:27017/clarkdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => console.log('Connected to Clark DB'))

//Routes
app.use('/auth', require('./routes/authRouter.js'))
app.use("/api", expressJwt({secret: process.env.SECRET}))

app.use('/api/posts', require('./routes/propRouter.js'))


//err handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`)
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwiX2lkIjoiNWRiYjMxODViNzcwYzNiYWM2Y2ZhMDRhIiwidXNlcm5hbWUiOiJtb3J0eSIsIm1lbWJlclNpbmNlIjoiMjAxOS0xMC0zMVQxOTowOTo1Ny43ODdaIiwiX192IjowLCJpYXQiOjE1NzI1NTExODB9.g9Rb7BrKa6p8rsGQVrYCdnN0IUHk6M6nsUNcwLEaplw