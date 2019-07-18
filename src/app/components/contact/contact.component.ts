import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.refreshContacts();
  }

  
  contact: Contact;
  message: string;

  userid = JSON.parse(sessionStorage.getItem('userId'));
  contactlist_id = JSON.parse(sessionStorage.getItem('contactId'));

  refreshContacts() {
    this.contactService.view(this.userid, this.contactlist_id).subscribe((res) => {
      console.log(res);
      this.contact = res;
    });
  }

  deleteContact(contactId) {
    console.log(`delete contact ${contactId}`);
    this.contactService.deleteContact(contactId).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of Contact ${contactId} was Successful`;
        this.goBack();
      }
    );
  }

  goBack() {
    this.router.navigate(['my-contacts']);
  }
}
