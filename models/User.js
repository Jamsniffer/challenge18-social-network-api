const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // might need more validation then this                                    <-----delete this comment after successful test
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },

    thoughts: {
        //Array of _id values referencing the Thought model
    },

    friends: {
        //Array of _id values referencing the User model (self-reference)
    }, 

    //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
});

const User = model('User', UserSchema);

module.exports = User;