
const { AuthenticationError } = require('apollo-server-express');
const { User, Reviews } = require('../models');
const { signToken } = require('../utils/auth');
const {createWriteStream} = require('fs')

const storeUpload = ({ stream, filename }) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(filename))
      .on("finish", () => resolve())
      .on("error", reject)
  );

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('reviews')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('reviews')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('reviews');
        },
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Reviews.find(params).sort({ createdAt: -1 });
        },
        review: async (parent, { _id }) => {
            return Reviews.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addReview: async (parent, args, context) => {
            if (context.user) {
                const reviews = await Reviews.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: reviews._id } },
                    { new: true }
                );

                return reviews;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        uploadFile: async (parent, { file }) => {
            const { stream, filename } = await file;
            await storeUpload({ stream, filename });
            return true;
        }
    }

};



module.exports = resolvers;