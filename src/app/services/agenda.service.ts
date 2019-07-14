import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from '../models/agenda';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient,
    private router:Router) { }

    agenda:Agenda[]

  list(){
    return this.http.get<Agenda[]>(this.serverUrl + "agenda");
  }

  view(){
    this.router.navigate[('task')]
  }

  listTaskByAgenda(agendaId){
    return this.http.get<Task[]>(this.serverUrl + "tasks");
  }

  // getPersonal(){
  //   return this.agenda.filter((agenda)=>{
  //   return agenda.type =='personal';
  //   });
  // }
  
  // listPersonal(agendaId:number){
  //   let agenda = { "agendaId": agendaId};
  //   return this.http.post<Agenda[]>(this.serverUrl + "agenda/personal", agenda);
  // }

  // listBusiness(){
  //   let agenda = { "email": email, "password": password};
  //   return this.http.get<Agenda[]>(this.serverUrl + "agenda");
  // }

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
