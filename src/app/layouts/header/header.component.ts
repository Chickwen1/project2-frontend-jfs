import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isUserLoggedIn:boolean;

  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.userService.isUserLoggedIn();
  }

}

