import { User } from './user';

export class Contact {

  contactlist_id: number;
  userid: number;
  firstname: string;
  lastname: string;
  phone_number: string;
  address: string;
  city: string;
  state: string;

  constructor(contactResponse: any) {
    this.contactlist_id = contactResponse.contactlist_id;
    this.userid = contactResponse.userid;
    this.firstname = contactResponse.firstname;
    this.lastname = contactResponse.lastname;
    this.phone_number = contactResponse.phone_number;
    this.address = contactResponse.address;
    this.city = contactResponse.city;
    this.state = contactResponse.state;

  }

}
