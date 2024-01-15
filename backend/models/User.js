const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    tokens: [{
            type: String,
            required: true,
    }]
});

schema.statics.findByToken = function (token) {

    const User = this;
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_TOKEN);
    } catch (e) {
      return Promise.resolve();
    }
    return User.findOne({
        '_id': decoded._id
    });
}


schema.pre('save', function(next) {
    var user = this;
    if (user.isModified('password')) {
        bcrypt.hash(user.password , 10, function(err, hash) {
           user.password = hash;
           next();
        });
    } else {
        next();
    }
});

module.exports = mongoose.model('User', schema);