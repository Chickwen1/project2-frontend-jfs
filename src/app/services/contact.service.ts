import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient,
    private router: Router) { }


  
  
 
  userId = JSON.parse(sessionStorage.getItem('userId'));
  //contact = JSON.parse(sessionStorage.getItem('contact'));
  //contactId = JSON.parse(sessionStorage.getItem('contactId'));

  list(userId) {
    return this.http.get<Contact[]>(this.serverUrl + `contact/${userId}`);
  }

  view(userId, contactId) {
    console.log("view", userId, contactId);
    return this.http.get<Contact>(this.serverUrl + `contact/${userId}/${contactId}`);
  }

  
  contact = JSON.parse(sessionStorage.getItem('contact'));

  createNewContact(contact) {
    console.log(contact)
   
    return this.http.post(this.serverUrl + `contact`, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(this.serverUrl + `contact/${id}`);
  }

  

  
}
