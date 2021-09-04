import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecutrixGaurdGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
          if(localStorage.getItem("accountName") != undefined && localStorage.getItem("privatekey") != undefined){
            return true;
          }else{
            this.router.navigate(['login']);
            
            return false;
          }
  }
}
