const { Schema, model } = require('mongoose');

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: 'A username is required',
        trim: true,
    },

    email: {
        type: String,
        required: 'Valid email is required',
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },

    thoughts: [
        //Array of _id values referencing the Thought model
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }
    ],

    friends: [
        //Array of _id values referencing the User model (self-reference)
        {
            type: Schema.Types.ObjectId,
            ref: 'User' 
        }
    ], 
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;