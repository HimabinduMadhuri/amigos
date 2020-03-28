import { LoginStatusService } from './../login-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string = "";
  password:string = "";
  loginStatus:boolean;
  msg:string ="";

  constructor(private loginStatusService:LoginStatusService) { 
    this.loginStatus = this.loginStatusService.isLoggedIn;
  }

  ngOnInit(): void {
  }
  checkLogin(txt1){
    if(this.userName == "hima" && this.password =="sai1247"){
      this.msg = "Successfull Login";
      this.loginStatusService.isLoggedIn = true;
      this.loginStatus = true;
    }
    else{
      this.msg = " Invalid Login";
      this.loginStatusService.isLoggedIn= false;
      this.loginStatus =false;
    txt1.focus();
    }

  }
  LogOut(){
    this.loginStatusService.isLoggedIn = false;
    this.loginStatus = false;
  } 
}
