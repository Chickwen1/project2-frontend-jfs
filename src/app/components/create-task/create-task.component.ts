import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { Agenda } from 'src/app/models/agenda';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  agenda:Agenda;
  task:Task;
  message: string;
  taskId: number;
  taskDate:Date;
  taskDescription:string;
  duration:number;
  location:string;
  
  constructor(private taskService:TaskService,
    private route:Router) { }

  ngOnInit() {
  }

  createTask(){
     this.task = new Task(this.taskId, this.taskDate, this.taskDescription, this.duration, this.location, "Not Started", this.agenda);
    console.log(`created task ${this.task} for agenda ${sessionStorage.getItem('agendaId')}`);
    this.taskService.createTask(this.taskId, this.task).subscribe(
      response => {
        console.log(response);
        this.message = `Creation of Task ${this.task} Successful`;
      }
    );

  }

}
