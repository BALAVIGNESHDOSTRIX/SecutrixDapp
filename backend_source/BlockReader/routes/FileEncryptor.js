var express = require('express');
var FileEncryptRouter = express.Router();
var app = express();
var bodyParser = require('body-parser');
var pipe = require('pipe');
const image2base64 = require('image-to-base64');
var Eos = require('eosjs');
var Upload = require('../models/uploader');
const { ecc } = Eos.modules;

var eosConfig = {
    chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982sa9444273cbc64c41473',
    keyProvider: ['5JhPaeznHRtnCQqh86X2STFvmXrAv3LmCAz8Q11sgJbMcAJqFjHu'],
    httpEndpoint: 'http://jungle2.cryptolions.io:80',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false,
    sign: true
  }

eosConfig.binaryen = require("binaryen")
const eos = Eos.Testnet(eosConfig)

var multer = require('multer');
var cors = require('cors')
app.use(cors())
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 
  }
var fs = require('fs')
const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var encryptor = require('file-encryptor');

var key = 'My Super Secret Key';


FileEncryptRouter.post('/fileupload',cors(corsOptions),(req,res) => {

   


        var storage = multer.diskStorage({
            destination: './tmp',
            filename: function (req, file, cb) {
                cb(null, file.originalname)
              
              }
        });
        var upload = multer({
            storage: storage
        }).any();
    
        upload(req, res, function(err) {
            if (err) {
                console.log(err);
                return res.end('Error');
            } else {
               // console.log(req.body);
                req.files.forEach(function(item) {
                   // console.log(item.originalname);
    
                    encryptor.encryptFile('./tmp/'+ item.originalname,__dirname+ '/tmp/'+'enc-'+ item.originalname, key, function(err,data) {
                       
                            if(err) console.log(err);
    
                            fs.unlinkSync('./tmp/'+item.originalname);
    
                            let testFile = fs.readFileSync(__dirname+'/tmp/'+'enc-'+item.originalname);
                            let testBuffer = new Buffer(testFile);
    
                            ipfs.files.add(testBuffer, function (err, file) {
                                if (err) {
                                  console.log(err);
                                }
                                console.log(file)
                                fs.unlinkSync(__dirname+'/tmp/'+'enc-'+item.originalname);
                                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                                res.setHeader('Access-Control-Allow-Credentials', true);
                                res.setHeader('Access-Control-Allow-Origin', 'http://10.10.0.23:8000');
                                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                                res.send(file);
                               // resolve(file);
                        })
    
       
                      });
     
                });
               
            }
        });


    })


    FileEncryptRouter.get('/certificate',(req,res) => {

                var ipfshash = req.query.ipfshash;
                var want_file_name = req.query.certname;

                console.log(ipfshash)
                console.log(want_file_name);

               
                    const stream = ipfs.files.catReadableStream(ipfshash);
                    const fileStream = fs.createWriteStream(__dirname + '/ipfsfile/'+ want_file_name + '.png');
                    stream.pipe(fileStream)
                    // res.json("true");
                    var needfile = __dirname + '/ipfsfile/' + want_file_name + '.png';


                    setTimeout(() => {
                        fs.access(needfile,fs.F_OK,(err)=>{

                            if (err) {
                                  console.error(err)
                                  return
                                }
        
                                    res.json(want_file_name);   
                                           
                            })
                    },4000)        
            
    })


    FileEncryptRouter.get('/decrypt',(req,res) => {

        

                var filename = req.query.filename;
                var filepath = __dirname + '/ipfsfile/'+ filename + '.png';

                fs.access(filepath,fs.F_OK,(err)=>{

                    if (err) {
                          console.error(err)
                          return
                        }

                    setTimeout(() => {

                        encryptor.decryptFile(__dirname + '/ipfsfile/' + filename + '.png', __dirname + '/decryptfile/' + filename +'-dec.png', key, function(err,data) {
                            if(err) console.log(err);
                           // res.json("Hello Julius");  
                                var testfile = filename + '-dec.png';
                                res.json(testfile);
                           });

                    },4000)
                        
                            
                                   
                    })


    })


FileEncryptRouter.get('/getdecryptfile',(req,res) => {

        var sendfile = req.query.decrypt;
        var pubkey = req.query.pubkey;


        console.log(sendfile)
        console.log(pubkey);


         var sendfilepath = __dirname + '/decryptfile/' + sendfile;

        fs.access(sendfilepath,fs.F_OK,(err)=>{

            if (err) {
                console.error(err)
                return
              }
              
            setTimeout(() => {
                image2base64(sendfilepath) // you can also to use url
                .then(
                    (response) => {
                        console.log(response); //cGF0aC90by9maWxlLmpwZw==

                        var mess = response;
                        let encrypted_message = ecc.Aes.encrypt(secureconfig, pubkey, mess);
                        encrypted_message.nonce = encrypted_message.nonce.toString();
                        encrypted_message.message = encrypted_message.message.toString("binary");
                        encrypted_message = JSON.stringify(encrypted_message);
                        var pubKeys = ecc.privateToPublic(secureconfig)
                        res.json({"base64hash" : encrypted_message,"pubkey":pubKeys });
                    }
                )
                .catch(
                    (error) => {
                        console.log(error); //Exepection error....
                    }
                )
              },4000)
        })

})



FileEncryptRouter.post('/postblockD',(req,res) =>{

            


            var transid = Object.values(req.body)[0];
            var blockno = Object.values(req.body)[1];

            var bloc = blockno;
            var time = 0

            for(let i=bloc;i<=bloc + time;i++){

                eos.getTransaction(transid,parseInt(i),(err,data) => {

                    if(err){

                        time = time + 1;
                    }else{

                        

                        if(data.trx.trx.actions[0].account == "secutrixdapp"){
    
                            let consoleData = data.trx.trx.actions[0].data;
                            let blockNumber = data.block_num;
                            let txId = data.id;
                            let executionfuc = data.trx.trx.actions[0].name;
          
                            console.log(consoleData,blockNumber,txId,executionfuc);
          
                            var upload = new Upload({
                                        name : executionfuc,
                                        from : consoleData.owner,
                                        certname : consoleData.certname,
                                        blockno : parseInt(blockNumber),
                                        transid : txId,
                                        ipfshash : consoleData.ipfshash
                                      })
          
                          upload.save().then(c => console.log(c)).catch(err => console.log(err));
                          }

                    }
  
           })
            }


            
})


module.exports = FileEncryptRouter;
