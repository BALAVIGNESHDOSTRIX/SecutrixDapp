const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var db = require('./db');
var index = require('./index').actionWatcher;
var effects = require('./effects');
var Secutrixrouter = require('./routes/SecutrixRouter');
var FileEnrouter = require('./routes/FileEncryptor');
const eosConfig = require('./config').eosConfig;
Eos = require('eosjs')


eosConfig.binaryen = require("binaryen")
eos = Eos.Testnet(eosConfig)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
       // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });



app.use('/dostrix',Secutrixrouter);
app.use('/file',FileEnrouter);




module.exports = app;
