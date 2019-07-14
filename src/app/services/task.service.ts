import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Task[]>(this.serverUrl + "tasks");
  }

  deleteTask(id:number){
    return this.http.delete( this.serverUrl + `tasks/${id}`);
  }

  retrieveTask(id:number){
    return this.http.get<Task>( this.serverUrl + "tasks/"+ id);
  }

  updateTask(id, task){
    return this.http.put( this.serverUrl + "tasks/"+ id, task);
  }

  createTask(id, task){
    return this.http.post( this.serverUrl + "tasks/"+ id, task);
  }


}