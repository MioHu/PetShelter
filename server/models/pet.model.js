const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least 3 characters.']
    },
    type:{
        type: String,
        required: [true, 'Type is required.'],
        minlength: [3, 'Type must be at least 3 characters.']
    },
    description:{
        type: String,
        required: [true, 'Description is required.'],
        minlength: [3, 'Description must be at least 3 characters.']
    },
    skill1: String,
    skill2: String,
    skill3: String,
    like: {
        type: Number,
        default: 0
    }
}, {timestamp: true})

module.exports.Pet = mongoose.model('pet', PetSchema);