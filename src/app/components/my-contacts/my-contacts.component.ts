import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent implements OnInit {

  

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.refreshContacts();
  }

  contactId: number;
  contacts: Contact[];
  message: string;
  

  userid = JSON.parse(sessionStorage.getItem('userId'));
  

  refreshContacts() {
    
    this.contactService.list(this.userid).subscribe((res) => {
      console.log(res);
      this.contacts = res;
    });
  }

  view(contactId, userid) {

    console.log(`view ${contactId}, ${userid}`);
    sessionStorage.setItem('contactId', `${contactId}`)
        this.router.navigate(['contact'])
  }

  createContact(userid) {
    console.log(`createContact`, `${userid}`);
    this.router.navigate(['createcontact'])
  }

  goBack() {
    this.router.navigate(['welcome']);
  }

}
