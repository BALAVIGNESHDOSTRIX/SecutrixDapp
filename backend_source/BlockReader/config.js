var express = require('express');
var bodyparser = require('body-parser')
var app = express()
fs = require('fs')

var eosConfig = {
    chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
    keyProvider: ['5JhPaeznHRtnCQqh86X2STFvmXrAv3LmCAz8Q11gJbMcAJqFjHu'],
    httpEndpoint: 'http://jungle2.cryptolions.io:80',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false,
    sign: true
  }
  
  var db = {
    MONGOOSE_CONNECTION_STRING : 'mongodb://localhost:27017/',
    MONGOOSE_DBNAME : 'securtrixdapps',
    AGENDA_CONNECTION_STRING : 'mongodb://localhost:27017/',
    AGENGA_DBNAME : 'securtrixdapps',
    AGENGA_COLLECTION_NAME : 'agendaJobs'
  }
  
  module.exports = {
    dbConfig : db,
    eosConfig : eosConfig
  }

  