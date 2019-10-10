const express = require('express')
const app = express()
const uuid =  require('uuid/v4')

const bounties = [
    {
        "firstName": "",
        "lastName": "",
        "living": true,
        "bountyAmount": 0,
        "bountyType": "Sith",
        "_id": uuid()
    }
]

//middlewear
app.use(express.json())

app.get ("/bounties", (req, res) => {
    res.send(bounties)
})

app.get ("/bounties/:_id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
    res.send(foundBounty)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

app.delete("/bounties/:_id", (req, res) => {
    const bountyID = req.params._id
    const bountyToDelete = bounties.findIndex(bounty => bounty._id === bountyID)
    const bountyName = bounties[bountyToDelete].firstName
    bounties.splice(bountyToDelete, 1)
    res.send(`Successfully collected the bounty on ${bountyName}`) 
})

app.put("/bounties/:_id", (req, res) => {
    const bountyID = req.params._id
    const bountyToUpdate = bounties.find(todo => bounty._id === bountyID)
    const bountyIndexUpdate = todos.findIndex(bounty => bounty._id === bountyID)
    const updateBounty = Object.assign(bountyToUpdate, req.body)
    bounties.splice(bountyIndexUpdate, 1, updateBounty)
    res.send(updateBounty)
})

app.listen(7000, () => {
    console.log('Server is running on port 7000')
})