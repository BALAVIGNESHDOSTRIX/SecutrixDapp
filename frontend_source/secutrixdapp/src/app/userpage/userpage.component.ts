import { Component, OnInit } from '@angular/core';
import {SecutrixService} from '../secutrix.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css','./userpage.style.css',]
})
export class UserpageComponent implements OnInit {

      username : any;
      selectedFile : any;
      File_select : any;
      fileName : any;
      url : any;
      initial_cert:any = [];
      check : any = false;
      base64textString : any;
      baseimage : any;
      imagestatus = false;
      myFile :any = false;
      imagecontent : any;

      onloaddata : any;
      certnameBase : any;
      description : any;
    

  constructor(private sec:SecutrixService,private router:Router,private spin : NgxSpinnerService,private http:HttpClient ) {
    this.GetFormData();
  }

  ngOnInit() {

      

        this.sec.GetUsername().then(cname => {

          if(cname !== 'undefined'){

                this.username = cname;

          }
  })


}


onFileChanged(event){
  this.selectedFile = {};
  this.selectedFile = event.target.files[0];
  this.File_select = true;

  this.fileName = this.selectedFile['name'];
  if(this.fileName.length > 35)
  {
    this.fileName = this.fileName.slice(0,30) + '.....' + this.fileName.slice(this.fileName.length-10, this.fileName.length)
  }

  var reader = new FileReader();
  reader.onload = (event: ProgressEvent) => {
    this.url = (<FileReader>event.target).result;
  }

  reader.readAsDataURL(event.target.files[0]);
  
    this.readerFile(event);
}

readerFile = (eventF) =>{

  var reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsBinaryString(this.selectedFile);
}

_handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;
         this.base64textString= btoa(binaryString);
         console.log(this.base64textString);
 }

file_clear()
{
  this.selectedFile = {};
  this.File_select = false;
  this.url = ""
  this.fileName = ""
  console.log("Cleared")
  this.base64textString = "";
 
}

somevalue = (text) =>{

  this.certnameBase = text;
}

somevalues = (text) =>{

  this.description = text;
}

UploderPost = () =>{

      if(this.File_select == true && this.base64textString !== "" ){

            this.sec.MessageEncrpyter(this.base64textString).then(encrypthash => {

                  var stringer = JSON.stringify(encrypthash);
                  var data = new FormData();
                  data.append('string',stringer)
                  this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true",data).subscribe((r)=>{
                        console.log(r['Hash']);

                        if(this.certnameBase !== "" && this.description !==""){

                          var cname = this.certnameBase
                          var ipfshash = r['Hash']
                          var descript = this.description

                              this.sec.UploadFile(cname,descript,ipfshash).then(transd => {

                             
                                      var obj = {

                                            "blockNo" :  transd.processed.block_num,
                                            "console" : (transd.processed.action_traces[0].console).split(";;"),
                                            "transid" : transd.transaction_id,
                                            "executor" : transd.processed.action_traces[0].act.data.owner

                                      }


                                    this.http.post("https://secutrix.herokuapp.com/file/postblockD/",obj).subscribe((r)=>{


                                          if(r == "success"){
                                            this.url = "";
                                            
                                            this.certnameBase = "";
                                            this.fileName = "";
                                            this.description = "";
                                            this.file_clear();
                                          }
                                    
                                    })

                              
                               
                              })
                        }
                  })
            })
      }
}


GetFormData = () =>{

 this.sec.GetDataFromDB().then(c => {

        this.initial_cert = c;

        console.log(c);
 });

}

checks = (id,ipfshash,certName) =>{

     this.http.get("http://ipfs.io/ipfs/" + this.initial_cert[id].ipfs).subscribe((r)=>{        

this.sec.MessageDecryptor(r).then((decryptbase64) => {

console.log(decryptbase64);

this.initial_cert[id].imagestring = "data:image/png;base64," + decryptbase64;

  
this.initial_cert[id].openstatus = true;

})

})



}





certdisplayoff = (id) => {
  this.initial_cert[id].openstatus = false;
  this.initial_cert[id].imagestring = "";
}


CreateUpload = () => {

  document.getElementById("openModalButton").click();
}


downloadImage = (id) =>{



console.log(this.initial_cert[id].imagestring)

}


TeraLogout = () =>{

  localStorage.clear();

  this.router.navigate(['login']);
}


}