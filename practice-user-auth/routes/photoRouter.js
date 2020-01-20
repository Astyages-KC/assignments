const express = require('express')
const photoRouter = express.Router()
const Photo = require("../models/photos.js")

// Post
photoRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newPhoto = new Photo(req.body)
    newPhoto.save((err, savedPhoto) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPhoto)
    })
})

module.exports = photoRouter