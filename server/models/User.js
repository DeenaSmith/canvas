const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')


const artistSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Email address is required']
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        
    }
)

artistSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 16;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next()
});

artistSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', artistSchema)

module.exports = User;