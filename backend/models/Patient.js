const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    secondName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    adress: {
        type: String,
        required: true
    },
    additionalAdress: {
        type: String
    }
});


module.exports = mongoose.model('Patient', schema);