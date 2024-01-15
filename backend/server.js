const express = require('express');
const mongoose = require('mongoose');
const {authRoutes, patientRoutes} = require('./routes');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello');
});
app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);

mongoose.connect(process.env.DB_URI).then(() => {
    console.log('Db connected...');
    const server = app.listen(8080, () => {
        console.log('Server running at localhost:8080');
    });
});