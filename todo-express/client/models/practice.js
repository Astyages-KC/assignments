const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    releaseYear: Number,
    genre: {
        type: String,
        enum: ["action", "fantasy", "documentary"],
        required: true
    }
})

{
    title: "Jaws",
    etc...
}

module.exports = mongoose.model("Movie", movieSchema)