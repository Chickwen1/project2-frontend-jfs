import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  serverUrl = "http://localhost:8090/"

  userObj = JSON.parse(sessionStorage.getItem('user'))
  agendaObj = JSON.parse(sessionStorage.getItem('agendaId'))

  constructor(private http: HttpClient) { }

  list(agendaId:number){
    return this.http.get<Task[]>(this.serverUrl + `agenda/${agendaId}/tasks`);
  }

  deleteTask(id:number){
    return this.http.delete( this.serverUrl + `tasks/${id}`);
  }

  retrieveTask(id:number){
    return this.http.get<Task>( this.serverUrl + `tasks/${id}`);
  }


  updateTask(id, task){
    return this.http.put( this.serverUrl + "tasks/"+ id, task);
  }

  createTask(task){
    console.log(task);
    return this.http.post( this.serverUrl + `tasks/`, task);
  }
}