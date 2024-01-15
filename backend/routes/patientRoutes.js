const router = require('express').Router();
const {Patient} = require('../models');

router.post('/', (req,res) => {

    const {code, firstName, secondName, sex, dateOfBirth, cover, region, city, area, phone, adress, additionalAdress} = req.body;
    Patient.create({code, firstName, secondName, sex, dateOfBirth, cover, region, city, area, phone, adress, additionalAdress})
    .then(patient => {
        res.status(201).json({ patient });
    }).catch(err => {
        res.status(400).json({ message: 'Patient not created' });
    });
});

router.get('/', (req,res) => {

    const pageIndex = req.query.page ? parseInt(req.query.page)-1 : 0;
    console.log(parseInt(pageIndex));
    Patient.find().skip(pageIndex*7).limit(7).then(patients => {
        res.status(200).json({ patients });
    }).catch(err => {
        res.status(404).json({ patients });
    });
});

module.exports = router;