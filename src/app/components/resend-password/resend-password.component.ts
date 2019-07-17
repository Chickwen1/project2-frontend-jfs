import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-password',
  templateUrl: './resend-password.component.html',
  styleUrls: ['./resend-password.component.css']
})
export class ResendPasswordComponent implements OnInit {

  email:string; 
  errorMessage = 'Invalid Email';
  invalidLogin = false;

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  resendPass(){
    console.log(`Email:${this.email}`);
    this.userService.resendPass(this.email).subscribe ( (res)=>{
      console.log(res);
      
      if (res != null){
        this.router.navigate(['login']);
        alert('Your password has been sent');
    }
        else{
        }
    }
    ,(err)=>{console.log(err)
    alert('Username does not exist')});
  }
}
