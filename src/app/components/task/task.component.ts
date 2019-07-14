import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  
  constructor( private taskService:TaskService,
    private router:Router) { }

  ngOnInit() {
    this.refreshTasks();
  }

  tasks : Task[];
  message: string;
  taskId:number;
  agendaId:number;

  refreshTasks() {
    this.taskService.list().subscribe((res) => {
      console.log(res);
      this.tasks = res;
    });
  }

  deleteTask(taskId){
    console.log(`delete task ${taskId}`);
    this.taskService.deleteTask(taskId).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Task ${taskId} Successful`;
        this.refreshTasks();
      }
    );
  }

  updateTask(taskId){
    console.log(`update ${taskId}`);
    this.router.navigate(['edit-task', taskId])
  }

  addTask(){
    this.router.navigate(['edit-task', -1])
  }

}
