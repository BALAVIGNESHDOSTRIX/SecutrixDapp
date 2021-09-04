var express = require('express');
var app = express();
var FileEncryptRouter = express.Router();
var bodyParser = require('body-parser');
var Upload = require('../models/uploader');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


FileEncryptRouter.post('/postblockD',(req,res) =>{

            
                    console.log(req.body);

                    var transid = Object.values(req.body)[2];
                    var accountname = Object.values(req.body)[3];
                    var funcexecute = Object.values(req.body)[1][0];
                    var ctname = Object.values(req.body)[1][2];
                    var ipfshash = Object.values(req.body)[1][3];
                    var bknum = Object.values(req.body)[0];
                    var descript = Object.values(req.body)[1][4];


                    console.log(transid,accountname,funcexecute,ctname,ipfshash,bknum)


                                        var upload = new Upload({
                                        name : funcexecute,
                                        from : accountname,
                                        certname : ctname,
                                        blockno : parseInt(bknum),
                                        transid : transid,
                                        ipfshash : ipfshash,
                                        description : descript
                                      })

                    upload.save().then(c => {
                            res.json("success");
                    }).catch(err => console.log(err));


                   
})

FileEncryptRouter.get('/getcertdetail',(req,res,next)=> {


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

FileEncryptRouter.get('/getAlldetail',(req,res,next) => {

            

                var form = req.query.from;

                Upload.find({from : form}).then(c => {

                        //console.log(c);
                        res.send(c);
                }).catch(err => {
                   res.send(err);
                })
          
})

//Get all the chat details about user

FileEncryptRouter.get('/getsechat',(req,res,next) => {

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
FileEncryptRouter.get('/searchdoc',(req,res,next) => {

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


module.exports = FileEncryptRouter;
