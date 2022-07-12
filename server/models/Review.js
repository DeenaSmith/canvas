const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat')
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        reviewText: {
            type: String,
            required: "Please let us know about your experience",
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => dateFormat(timeStamp)
        },
        username: {
            type: String,
            required: true
        },
    }
)

const Reviews = model('Reviews', reviewSchema)

module.exports = Reviews