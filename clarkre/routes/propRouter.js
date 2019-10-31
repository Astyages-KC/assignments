const express = require('express');
const propRouter = express.Router();
const Property = require('../models/properties.js');

// Get All
propRouter.get('/', (req, res, next) => {
    Property.find((err, properties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(properties);
    });
});

//Get by user
propRouter.get('/user', (req, res, next) => {
    Property.find({user: req.user._id}, (err, userProperties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(userProperties)
    })
})


// Post
propRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newProperty = new Property(req.body)
    newProperty.save((err, savedProperty) => {
        if(err){
            res.status(500)
            return next(err)
        }
       return res.status(201).send(savedProperty) 
    })
})


module.exports = propRouter;