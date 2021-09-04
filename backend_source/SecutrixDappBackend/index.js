var express = require('express')
var app = express()
var eosConfig = require('./eosConfig').eosConfig;
var dbConfig = require('./eosConfig')/dbConfig;
var mongoose = require('mongoose');
var Eos =  require('eosjs');
var cors = require('cors');
eosConfig.binaryen = require("binaryen")
eos = Eos.Testnet(eosConfig)

var bodyparser = require('body-parser')
var FileEnrouter = require('./routes/FileEncryptor');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
app.use('/file',FileEnrouter);


mongoose.connect("mongodb://p:s123@ds227654.mlab.com:27654/secutrixdapp", function(err, client) {
  if (err) {
     console.log("mongo error", err);
     return;
  }
});

  var port = process.env.PORT || 3000;

app.listen(port,(err) =>{
    if(err) console.log("The server is not able to run")
    console.log(`The Server is Successfully running at the port ${3000}.`)
})
