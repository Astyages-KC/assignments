const express = require('express')
const publicPhotoRouter = express.Router()
const Photo = require("../models/photos.js")

// Get All
publicPhotoRouter.get("/", (req, res, next) => {
    Photo.find((err, photos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(photos)
    })
})

// Two options for get (above uses find, below Get all using async await)

// publicPhotoRouter.get("/", async (req, res, next) => {
//     try{
//         const photos = await Photo.find()
//         return res.status(200).send(photos)
//         // if you wanted to get all users also use next 2 lines
//         // const users = await users.find()
//         // return res.status(200).send({photos, users})
//     }
//     catch(err){
//         res.status(500)
//         return next(err)
//     }
// })


module.exports = publicPhotoRouter