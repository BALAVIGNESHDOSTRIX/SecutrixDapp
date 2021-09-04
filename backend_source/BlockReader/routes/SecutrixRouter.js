var express = require('express');
var SecutrixRouter = express.Router();
var bodyParser = require('body-parser');
var DocReg = require('../models/DocReg');
var Sechat = require('../models/Sechat');
var Upload = require('../models/uploader');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Get particular certificate details

SecutrixRouter.get('/getcertdetail',(req,res,next)=> {


        return new Promise((resolve,reject) => {


            if (!req.body) return res.status(500).send("There was a problem gettting the information from the database.");
    
            var name = req.query.certname;
        
            Upload.findOne({certname : name}).then(c => {
                console.log(c);
                resolve(c);
            }).catch(err => {
                reject(err);
            })


        } )
    
})

//Get all the uploaded file details about the user

SecutrixRouter.get('/getAlldetail',(req,res,next) => {

            

                var form = req.query.from;

                Upload.find({from : form}).then(c => {

                        //console.log(c);
                        res.send(c);
                }).catch(err => {
                   res.send(err);
                })
          
})

//Get all the chat details about user

SecutrixRouter.get('/getsechat',(req,res,next) => {

                return new Promise((resolve,reject) => {

                    var from = req.query.acc_name;
                

                    Sechat.find({from : from}).then(c => {

                        console.log(c);

                        resolve(c);
                    }).catch(err =>{

                        console.log(err)

                        reject(err);
                    })
                })
})

//Get searching doctor details
SecutrixRouter.get('/searchdoc',(req,res,next) => {

        var fromacc = req.query.fromact;
            return new Promise((resolve,reject) => {

                    DocReg.findOne({from : fromacc}).then(c => {

                        console.log(c);

                        resolve(c);
                    }).catch(err => {

                        console.log(err)
                        reject(err);
                    })
            })
})

//Post Call for Sigin

SecutrixRouter.post('/login',(req,res,next) => {

            
})




module.exports = SecutrixRouter;