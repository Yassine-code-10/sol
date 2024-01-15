const {User} = require('../models');

module.exports = (req,res,next) => {

    const token = req.cookies.jwt;
    if(!token) return Promise.reject();
    User.findByToken(token).then(user => {

        req.user = user;
        req.token = token;
        next();
    }).catch(err => {
        res.status(401).json({connected: 'no'});
    });

}