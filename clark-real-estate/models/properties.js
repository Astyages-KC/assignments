const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema =  new Schema({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }, 
    zipCode: {
        type: Number,
        required: true
    },
    forRentorSale: {
        type: String,
        enum: ['rent', 'sale']
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Property", propertySchema)