const express = require('express');
const publicRouter = express.Router();
const Property = require('../models/properties.js');

publicRouter.get('/', (req, res, next) => {
    Property.find((err, properties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(properties);
    });
});

//Get by user
publicRouter.get('/user', (req, res, next) => {
    Property.find({user: req.user._id}, (err, userProperties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(userProperties)
    })
})

module.exports = publicRouter;