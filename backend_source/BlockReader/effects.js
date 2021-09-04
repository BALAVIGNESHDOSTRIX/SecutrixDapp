
var config = require('./config').eosConfig;
Eos = require('eosjs')
eos = Eos.Testnet(config);
var Upload = require('./models/uploader');
var Sechat = require('./models/Sechat');
var DocReg = require('./models/DocReg');

async function logUpdate( blockInfo) {
  return new Promise(async (resolve, reject) => {
    
  const blockNum = JSON.stringify(blockInfo.indexState.blockNumber);
  

  var trx = await eos.getBlock(parseInt(blockNum));


  console.log(trx.transactions[0].trx.transaction)

 
























  // if(trx.transactions == ''){
  //         let temtrx = blockNum;

  //         console.log("pass1")
  //       while(true){
  //             temtrx = parseInt(temtrx) + 1;

  //             let temptrx =  await eos.getBlock(temtrx);
                
  //             if(temptrx.transactions !== ''){
                 

  //                   for(let d=0;d<temptrx.transactions.length;d++){
                
  //                         if(temptrx.transactions[d].trx.transaction.actions[0].account == "secutrixdapp"){
                            

  //                               let res = await eos.getTransaction( temptrx.transactions[d].trx.id,temtrx);

  //                               let blockNumber = res.block_num;
  //                               let txId = res.id;
  //                               let consoleData = res.trx.trx.actions[0].data;
  //                               let executionfuc = res.trx.trx.actions[0].name;

  //                               let somebj = [];
  //                               somebj.push({blockNumber,txId,consoleData,executionfuc});
                               
  //                               for(let s=0;s<somebj.length;s++){

  //                                 if(somebj[s].executionfuc == "uploader"){
  //                                   console.log("hello",somebj[s].consoleData.owner);

  //                                       var upload = new Upload({
  //                                           name : somebj[s].executionfuc,
  //                                           from : somebj[s].consoleData.owner,
  //                                           certname : somebj[s].consoleData.certname,
  //                                           blockno : parseInt(somebj[s].blockNumber),
  //                                           transid : somebj[s].txId,
  //                                           ipfshash : somebj[s].consoleData.ipfshash


  //                                       })

  //                                       upload.save().then(c => console.log(c)).catch(err => console.log(err));
  //                                 }
            
  //                                 else if(somebj[s].executionfuc == "docregis"){
  //                                   console.log(somebj[s]);

  //                                   var docreg = new DocReg({
  //                                       name : somebj[s].executionfuc,
  //                                       blockno : parseInt(somebj[s].blockNumber),
  //                                       transid : somebj[s].txId,
  //                                       from : somebj[s].consoleData.doc,
  //                                       fullname : somebj[s].consoleData.fullname,
  //                                       kychash : somebj[s].consoleData.kycipfs
  //                                   })

  //                                   docreg.save().then(c => console.log(c)).catch(err => console.log(err));

  //                                 }
            
  //                                 else if(somebj[s].executionfuc == "sechat"){
  //                                    // console.log(somebj[s]);

  //                                     var sechat = new Sechat({

  //                                       name : somebj[s].executionfuc,
  //                                       from : somebj[s].consoleData.from,
  //                                       to : somebj[s].consoleData.to,
  //                                       blockno : somebj[s].blockNumber,
  //                                       transid : somebj[s].txId,
  //                                       message : somebj[s].consoleData.message
  //                                     })

  //                                     sechat.save().then(c => console.log(c)).catch(err => console.log(err))
  //                                 }
  //                             }
      

  //                         }
  //                   }
               
  //                 break;
                
                
  //         }    
  //       }
  // }

  // else if(trx.transactions.length !== 0){

  //   console.log("pass1")
  //           for(let x=0;x<trx.transactions.length;x++){

  //               if(trx.transactions[x].trx.transaction.actions[0].account == "secutrixdapp"){


  //                 let res = await eos.getTransaction( temptrx.transactions[x].trx.id,temtrx);

  //                 let blockNumber = res.block_num;
  //                 let txId = res.id;
  //                 let consoleData = res.trx.trx.actions[0].data;
  //                 let executionfuc = res.trx.trx.actions[0].name;

  //                 let somebj = [];
  //                 somebj.push({blockNumber,txId,consoleData,executionfuc});
                 

  //                 for(let s=0;s<somebj.length;s++){

  //                     if(somebj[s].executionfuc == "uploader"){
  //                       console.log("hello",somebj[s].executionfuc);

  //                       var upload = new Upload({
  //                         name : somebj[s].executionfuc,
  //                         from : somebj[s].consoleData.owner,
  //                         certname : somebj[s].consoleData.certname,
  //                         blockno : parseInt(somebj[s].blockNumber),
  //                         transid : somebj[s].txId,
  //                         ipfshash : somebj[s].consoleData.ipfshash


  //                     })

  //                     upload.save().then(c => console.log(c)).catch(err => console.log(err));

  //                     }

  //                     else if(somebj[s].executionfuc == "docregis"){
  //                      // console.log(somebj[s]);

  //                       var docreg = new DocReg({
  //                         name : somebj[s].executionfuc,
  //                         blockno : parseInt(somebj[s].blockNumber),
  //                         transid : somebj[s].txId,
  //                         from : somebj[s].consoleData.doc,
  //                         fullname : somebj[s].consoleData.fullname,
  //                         kychash : somebj[s].consoleData.kycipfs
  //                     })

  //                     docreg.save().then(c => console.log(c)).catch(err => console.log(err));
  //                     }

  //                     else if(somebj[s].executionfuc == "sechat"){
  //                        // console.log(somebj[s]);

  //                         var sechat = new Sechat({

  //                           name : somebj[s].executionfuc,
  //                           from : somebj[s].consoleData.from,
  //                           to : somebj[s].consoleData.to,
  //                           blockno : somebj[s].blockNumber,
  //                           transid : somebj[s].txId,
  //                           message : somebj[s].consoleData.message
  //                         })

  //                         sechat.save().then(c => console.log(c)).catch(err => console.log(err))
  //                     }
  //                 }

                  


  //               }
  //           }

  // }

  
 

});
}

const effects = [
  {
    actionType: "secutrixdapp::uploader",
    effect: logUpdate,
  },
  {
    actionType: "secutrixdapp::docregis",
    effect: logUpdate,
  },
  {
    actionType: "secutrixdapp::sechat",
    effect: logUpdate,
  }
]

module.exports = effects
