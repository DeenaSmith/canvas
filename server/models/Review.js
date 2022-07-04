const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const reviewSchema = new Schema(
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
        toJSON: {
            getters: true
        }
    }
)

const Reviews = model('Reviews', reviewSchema)

module.exports = Reviews