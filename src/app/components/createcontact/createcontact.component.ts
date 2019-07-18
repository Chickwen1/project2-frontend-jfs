import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  
  message: string;
  userId: number;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createNewContact() {

    this.userId = JSON.parse(sessionStorage.getItem('userId'));

    console.log(this.userId, this.fname, this.lname, this.phone, this.email, this.address, this.city, this.state)


    let newContact = {
      "firstname": this.fname, "lastname": this.lname,
      "phone_number": this.phone, "contact_email": this.email, "address": this.address, "city": this.city, "state": this.state, "userid": this.userId
    };
    console.log(newContact)






    console.log(`created contact ${this.fname, this.lname} for user ${this.userId}and sent to DB`);
    this.contactService.createNewContact(newContact).subscribe(
      response => {
        console.log(response);
        this.message = `Creation of Contact ${this.fname, this.lname} Successful`;
        console.log(`created contact ${this.fname, this.lname} for user ${this.userId}`);
        this.router.navigate(['my-contacts']);
      }

    )
  }
    
    
  goBack() {
    this.router.navigate(['my-contacts']);
  }
}

