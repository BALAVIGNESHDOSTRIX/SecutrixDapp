import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import * as Eos from 'eosjs';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class SecutrixService {

  config = {}
  eos : any;

  usernameacc : any;
  globalset : any = [];


  constructor(private http: HttpClient, private spin : NgxSpinnerService, private router:Router, private location: Location) {

      this.config = {

      chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
      httpEndpoint: 'http://jungle2.cryptolions.io:80',
      broadcast: true,
      debug: true, 
      sign: true
      }
      this.eos = Eos(this.config);

   }

   
  //check the key is valid or not
  public async isValid(privKey): Promise<boolean>{
    const { ecc } = Eos.modules    
    return new Promise((resolve, reject) => {
      if(ecc.isValidPrivate(privKey))
        resolve(true);
      else
        resolve(false);
    })as Promise<boolean>;
  }

  //change the privae key public key
  public async PriToPub(privKey): Promise<any>{
    const { ecc } = Eos.modules
    return new Promise((resolve, reject) => {
      const pubKey = ecc.privateToPublic(privKey)
      resolve(pubKey)
    })as Promise<any>;
  }

  //change the account to public key
  public async AccToPub(acc): Promise<any>{    
    return new Promise((resolve, reject) => {
      this.eos.getAccount(acc).then(res => {
        resolve(res.permissions[0].required_auth.keys[0].key)
      })
    })as Promise<any>;
  }

  public async Login(acc,prikey): Promise<any>{

      return new Promise((resolve,reject) => {

            localStorage.setItem("accountName",acc);
            localStorage.setItem("privatekey",prikey);
            

            if(localStorage.getItem("accountName") == acc){


                  if(localStorage.getItem("privatekey") == prikey){

                      resolve(true);
                  }else if(localStorage.getItem("privatekey") !== prikey){
                      resolve(false);
                  }else{
                    resolve(false);
                  }
            }
      })as Promise<any>;
  }

  public async SetConfig():Promise<any>{

        return new Promise((resolve,reject) => {

              let config = {

                chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
                keyProvider: localStorage.getItem("privatekey"),
                httpEndpoint: 'http://jungle2.cryptolions.io:80',
                expireInSeconds: 60,
                broadcast: true,
                verbose: false,
                sign: true
              }

              let eos = Eos(config);
              resolve(eos);
        })as Promise<any>;
  }

  public async GetUsername():Promise<any>{

        return new Promise((resolve,reject) => {

              resolve(localStorage.getItem("accountName"));
        })as Promise<any>;
  }

  public async GetPrivateKey():Promise<any>{

          return new Promise((resolve,reject) => {
              resolve(localStorage.getItem("privatekey"));
          })
  }

  public async UploadFile(certname,des,hash):Promise<any>{


    return new Promise((resolve,reject) => {
           

           var accname = localStorage.getItem("accountName");

                  this.SetConfig().then( c => {

                        c.transaction("secutrixdapp",da => {

                          da.uploader(accname, certname,des ,hash,{authorization: [accname]});
                  }).then((cd) => {
        
                      resolve(cd);
                      
                  })

                })

                
          })as Promise<any>;    
       
  }

  public async MessageEncrpyter(message):Promise<any>{

    return new Promise((resolve,reject) =>{

      const { ecc } = Eos.modules;

      this.PriToPub(localStorage.getItem("privatekey")).then(pri =>{
        let encrypted_message = ecc.Aes.encrypt(localStorage.getItem("privatekey"), pri, message);
        encrypted_message.nonce = encrypted_message.nonce.toString();
        encrypted_message.message = encrypted_message.message.toString("binary");
        encrypted_message = JSON.stringify(encrypted_message);
        resolve(encrypted_message);
      });
    })
   
  }

//ipfshashdecryptor

  public async MessageDecryptor(encrymess):Promise<any>{

          return new Promise((resolve,reject) => {

            const { ecc } = Eos.modules;

            this.PriToPub(localStorage.getItem("privatekey")).then(pri => {
             let encrypted_message = JSON.parse(encrymess);
             let decrypted_message = ecc.Aes.decrypt(localStorage.getItem("privatekey"), pri, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
              let dechash = decrypted_message.toString();
             resolve(dechash);
  
            })
          })
  }

  //Get the user Details from DB

  public async GetDataFromDB():Promise<any>{

          return new Promise((resolve,reject) => {
                var from = localStorage.getItem("accountName");
                this.http.get('https://dostrixmedusa.herokuapp.com/file/getAlldetail/?from='+from).subscribe((c) => {

                         // console.log(Object.values(c).length);
                          console.log(c);

                          let gethash = [];

                          let sum = 0;
                          
                          for(let i=0;i<Object.values(c).length;i++){
                                
                             
                               
                                  
                              console.log(new Date(c[i].createdAt));
                                

                                   
                                 let obj = {

                                    "blockno" : c[i].blockno,
                                    "certname" : c[i].certname,
                                    "from" : c[i].from,
                                    "ipfs" : c[i].ipfshash,
                                    "time" : new Date(c[i].createdAt),
                                    "transid" : c[i].transid,
                                    "openstatus" : false,
                                    "imagestring" : "",
                                    "description" : c[i].description,
                                    "base64String" : ""
                                    
                                 }

                                  gethash.push(obj);


                                

                               
                                sum = sum + 1;   
                          }

                          if(sum == Object.values(c).length){

                            setTimeout(() => {
                                

                              this.globalset = gethash;
                              
                                resolve(this.globalset);
                             
                            },2000)
                          }

                         
                })
          })
  }

  

public async GetBase64Decryptor(mess,pubKey): Promise<any>{

        return new Promise((resolve,reject) => {


          const { ecc } = Eos.modules;
          let encrypted_message = JSON.parse(mess);
          let decrypted_message = ecc.Aes.decrypt(localStorage.getItem("privatekey"), pubKey, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
           let dechash = decrypted_message.toString();
           resolve(dechash);

        })
}


public async GetBlocDatas(transid,blockno): Promise<any>{

        return new Promise((resolve,reject) => {


          this.SetConfig().then(c => {


            c.getTransaction(transid,blockno,(err,data) => {

              if(err) console.log(err);
  
              resolve(data);


                })
          })

          })
          
}





}

