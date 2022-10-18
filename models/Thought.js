const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        validate: { len: [1,280] },
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },

    userName: {
        type: String,
        required: true,
    },

    reactions: {
        //Array of nested documents created with the reactionSchema
    }, 
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;