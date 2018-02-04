const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const promise = require('bluebird');
const auth = require('./routes/auth');
const reg = require('./routes/registeration');

const server = express();
const PORT = 8080;

dotenv.config();

mongoose.Promise = promise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });

server.use(bodyParser.json());


server.use('/api/login', auth);

server.use('/api/registeration', reg);

server.use(express.static('public'));


server.get('/*', (req, res)=>{
    res.send('<h1>Hello to React App</h1>');
});

server.listen(PORT, function(){
    console.log("Server is listening on " + PORT);
});