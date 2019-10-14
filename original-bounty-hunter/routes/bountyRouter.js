const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid/v4");
const Bounty = require("../models/bounty.js");

bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounties);
  });
});

bountyRouter.get("/:_id", (req, res) => {
  Bounty.findById(req.params._id, (err, bounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.send(bounty);
  });
});

bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, newBounty) => {
    if (err) {
      res.send(500);
      return next(err);
    }
  });
  return res.send(newBounty);
});

bountyRouter.delete("/:_id", (req, res, next) => {
  Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.send(bounty);
  });
});

bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, bounty) => {
        if(err) {
        res.status(500)
        return next(err);
        }
        return res.send(bounty)
    });
});

// bountyRouter.route("/")
// .get((req, res) => {
//     res.send(bounties)
// })
// .post((req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid()
//     bounties.push(newBounty)
//     res.send(newBounty)
// })

// bountyRouter.route("/:_id")
// .get ((req, res) => {
//     const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
//     res.send(foundBounty)
// })
// .delete((req, res) => {
//     const bountyToDelete = bounties.findIndex(bounty => bounty._id === req.params._id)
//     const bountyName = bounties[bountyToDelete].firstName
//     bounties.splice(bountyToDelete, 1)
//     res.send(`Successfully collected the bounty on ${bountyName}`)
// })
// .put((req, res) => {
//     const bountyToUpdate = bounties.find(bounty => bounty._id === req.params._id)
//     const bountyIndexToUpdate = bounties.findIndex(bounty => bounty._id === req.params._id)
//     const updateBounty = Object.assign(bountyToUpdate, req.body)
//     bounties.splice(bountyIndexToUpdate, 1, updateBounty)
//     res.send(updateBounty)
// })

module.exports = bountyRouter;
