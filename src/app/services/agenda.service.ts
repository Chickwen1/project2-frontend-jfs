import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from '../models/agenda';
import { Router } from '@angular/router';
import { Task } from '../models/task';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient,
    private router:Router) { }

    agenda:Agenda[]
    user:User[]

    userObj = JSON.parse(sessionStorage.getItem('user'))

  list(){
    return this.http.get<Agenda[]>(this.serverUrl + "agenda");
  }

  view(){
    this.router.navigate[('task')]
  }

  listTaskByAgenda(agendaId){
    return this.http.get<Task[]>(this.serverUrl + "tasks");
  }

  createNewAgenda(type:string){
    console.log(this.userObj)
    let agenda = { "user": this.userObj, "type": type};
    console.log( this.user, type)
    return this.http.post(this.serverUrl + `agenda`, agenda);
  }

  deleteAgenda(id:number){
    return this.http.delete( this.serverUrl + `agenda/${id}`);
  }

  getAgenda(email:string,password:string){
    let agenda = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", agenda);
  }

  delete(id:number){
    return this.http.delete( this.serverUrl + "users/"+ id);
  }

  findOne(id:number){
    return this.http.get<Agenda>( this.serverUrl + "users/"+ id);
  }
}
