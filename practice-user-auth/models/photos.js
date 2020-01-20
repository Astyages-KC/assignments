const mongoose = require("mongoose")
const Schema = mongoose.Schema

const photoSchema = new Schema({
    caption: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Photo", photoSchema)