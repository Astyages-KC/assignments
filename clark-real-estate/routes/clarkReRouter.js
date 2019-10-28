const express = require("express");
const clarkReRouter = express.Router();
const Property = require("../models/properties.js");

// Get all request
clarkReRouter.get("/", (req, res, next) => {
  Property.find((err, properties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(properties);
  });
});

//Get individual property
clarkReRouter.get("/search", (req, res, next) => {
  for (let i in req.query) {
    if (req.query[i] === '') {
      delete req.query[i]
    }
  }


  Property.find(req.query, (err, property) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(property);
  });
});

//Post property
clarkReRouter.post("/", (req, res, next) => {
  const newProperty = new Property(req.body);
  newProperty.save((err, newProperty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(newProperty);
  });
});

//Delete property
clarkReRouter.delete("/:_id", (req, res, next) => {
  Property.findOneAndRemove(
    { _id: req.params._id }, 
    (err, property) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(property);
  });
});

//Put request
clarkReRouter.put("/:_id", (req, res, next) => {
  Property.findByIdAndUpdate(
    req.params._id,
    req.body,
    {new: true},
    (err, property) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(property);
    });
});

module.exports = clarkReRouter
