import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

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
  userId:number;
  firstName:string;
  lastName:string;
  phoneNumber:string;
  address:string;
  city:string;
  state:string;


  constructor(private userService:UserService, 
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Login:", this.email, this.password);
    this.userService.login(this.email, this.password).subscribe ( (res)=>{
      console.log(res);
      json:true

      let user = new User(res);

      let userObj = JSON.stringify(res);
      sessionStorage.setItem('user', `${userObj}`)

      console.log(user);
      if (res != null){
        console.log(user)
        console.log(sessionStorage.getItem('user'))

        this.invalidLogin = false;
        
        sessionStorage.setItem('loggedInUser', this.email);
        sessionStorage.setItem('userId', `${user.userId}`);
        sessionStorage.setItem('fullName', `${user.firstName} ${user.lastName}`)
        this.router.navigate(['welcome']);
    }
    },(err)=>{console.log(err)
      alert('Username/password invalid')});
  }

  sendToResend(){
    this.router.navigate(['resend-password']);
  }

}
