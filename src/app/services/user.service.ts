import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<User[]>(this.serverUrl + "users");
  }

  register(user:User){
    return this.http.post( this.serverUrl + 'users', user );
  }

  login(email:string,password:string){
    let user = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", user);
  }

  delete(id:number){
    return this.http.delete( this.serverUrl + "users/"+ id);
  }

  findOne(id:number){
    return this.http.get<User>( this.serverUrl + "users/"+ id);
  }

  resendPass(email:string){
    return this.http.get<User>( this.serverUrl + "users/"+ email);
  }
  
    isUserLoggedIn(){
     let user = sessionStorage.getItem('loggedInUser');
     return !(user ===null)
   }
   
   logout(){
     sessionStorage.removeItem('loggedInUser');
   }
}
