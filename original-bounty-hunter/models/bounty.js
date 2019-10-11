const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true, 
        default: "Frank"
    },
    lastName: {
        type: String,
        required: true, 
        default: "Burns"
    },
    living: Boolean,
    bountymount: Number,

    bountyType: {
        type: String,
        enum: ["Jedi", "Sith"],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)