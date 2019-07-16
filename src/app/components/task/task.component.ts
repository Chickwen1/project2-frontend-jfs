import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  agendaId:number;
  
  constructor( private taskService:TaskService, private route: ActivatedRoute,
    private router:Router) { 
      this.route.params.subscribe ((params)=>{
       // this.agendaId = params['agendaId'];
       // console.log('AgendaId', this.agendaId);
      });

    }

  ngOnInit() {
      this.agendaId = JSON.parse(sessionStorage.getItem('agendaId'));//params['agendaId'];
       // console.log('AgendaId', this.agendaId);
      
    this.refreshTasks();
  }

  tasks : Task[];
  message: string;
  taskId:number;

  refreshTasks() {
    this.taskService.list(this.agendaId).subscribe((res) => {
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
    this.router.navigate(['create-task'])
  }

  goBack(){
    this.router.navigate(['agenda']);
  }

}
