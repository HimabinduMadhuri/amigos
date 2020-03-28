import { LoginStatusService } from './login-status.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements CanActivate {

  constructor(private loginStatusService:LoginStatusService , private router:Router) { }

  
  canActivate(route:ActivatedRouteSnapshot):boolean{
    if(this.loginStatusService.isLoggedIn ==false){
      alert("You Must  be Login in to Electronic Page");
      this.router.navigateByUrl("/");
    }

    return this.loginStatusService.isLoggedIn;


  }
}
