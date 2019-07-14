import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string; 
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private userService:UserService, 
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Login:", this.email, this.password);
    this.userService.login(this.email, this.password).subscribe ( (res)=>{
      console.log(res);
      
      if (res != null){
        this.invalidLogin = false;
        sessionStorage.setItem('loggedInUser', this.email);
        //sessionStorage.setItem('loggedInUserId', this.userId);
        this.router.navigate(['welcome']);
    }
        else{
          this.invalidLogin = true;
          this.router.navigate(['login']);
        }
    });
  }

  sendToResend(){
    this.router.navigate(['resend-password']);
  }

}
