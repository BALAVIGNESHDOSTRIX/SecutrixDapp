import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      
      if(localStorage.getItem("accountName") == undefined && localStorage.getItem("privatekey") == undefined){
        console.log("true")
        return true;
      }else{
        console.log("false")
        this.router.navigate(['']);
        return false;
        
      }
  }
}
