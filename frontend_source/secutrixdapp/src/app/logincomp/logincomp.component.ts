import { Component, OnInit } from '@angular/core';
import {SecutrixService} from '../secutrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {

  username : any;

  constructor(private sec:SecutrixService,private route:Router) { }

  ngOnInit() {
  }


  loginCheck = (a,b) =>{

      var username = a
      var privatekey = b

      console.log(a,b)
      //console.log("username",username)
      //console.log("privatekey",privatekey)

      this.sec.isValid(privatekey).then(c =>{
        //console.log("valid",c);

            if(c == true){
              console.log("pri-true");
                this.sec.AccToPub(username).then(name => {
                        var publikey = name;
                       
                        this.sec.PriToPub(privatekey).then(pub => {

                             if(publikey == pub){
                              console.log("samepub");
                                      this.sec.Login(username,privatekey).then(c =>{

                                        if(c == true){
                                          
                                            this.route.navigate(['']);
                                        }else{
                                            console.log("Not worked");
                                        }

                                      })
                             }else if(publikey !== pub){

                                    console.log("Please Check your key or accountname");
                             }
              
                          });

                  
                    })
              }
       })
  }

}
