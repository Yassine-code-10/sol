const router = require('express').Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/sign-in', (req, res) => {

    const { username, password } = req.body;
    const token = jwt.sign({ _id: User._id }, process.env.JWT_TOKEN, { expiresIn: '1d' });
    User.create({ username, password, tokens: [token] }).then(user => {
        res.cookie('jwt', token, { maxAge: 60 * 60 * 1000, httpOnly: true });
        res.status(201).json({ connected: 'ok', user: user.username });
    }).catch(err => {
        res.status(400).json({ message: 'User not created' });
    });
});

router.post('/login', (req, res) => {

    const { username, password } = req.body;
    const token = req.cookies.jwt;
    User.findOne({ username }).then(user => {

        if (!user) return res.status(400).json({ message: 'Incorrect username' });
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {

                if (token && user.tokens.includes(token)) {
                    const newToken = jwt.sign({ _id: User._id }, process.env.JWT_TOKEN, { expiresIn: '1d' });
                    user.tokens.splice(user.tokens.indexOf(token), 1, newToken)
                    user.save().then(u => {

                        res.cookie('jwt', newToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
                        res.status(200).json({ connected: 'ok', user: user.username });
                    });
                } else {
                    const newToken = jwt.sign({ _id: User._id }, process.env.JWT_TOKEN, { expiresIn: '1d' });
                    user.tokens.push(newToken)
                    user.save().then(u => {

                        res.cookie('jwt', newToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
                        res.status(200).json({ connected: 'ok', user: user.username });
                    });
                }
            } else {
                return Promise.reject();
            }
        });
    }).catch(err => {
        res.status(400).json({ message: 'Incorrect password' });
    });
});

router.delete('/logout', (req, res) => {

    const token = req.cookies.jwt;
    User.findOneAndUpdate({ tokens: token }, { $pull: { tokens: token } }).then(data => {

        res.clearCookie('jwt')
        res.status(200).send();
    }).catch(err => {
        res.json(err);
    })
});


module.exports = router;