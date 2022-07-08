const userSeed = require('./userSeed.json')
const reviewSeed = require('./reviewSeed.json')
const db = require('../config/connection')
const {Reviews, User} = require('../models')

db.once('open', async () => {
    try {
        await Reviews.deleteMany({})
        await User.deleteMany({})
        await User.create(userSeed)

        for (let i = 0; i < reviewSeed.length; i++) {
            const {_id, reviewAuthor} = await Reviews.create(reviewSeed[i])
            const user = await User.findOneAndUpdate(
                { username: reviewAuthor},
                {
                    $addToSet: {
                        reviews: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('Seeds have been planted!')
    process.exit(0)
});