import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { Agenda } from 'src/app/models/agenda';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Time } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  message: string;
  agenda:Agenda;
  task:Task;
  taskDate:Date;
  taskTime:Time;
  taskDescription:string;
  duration:number;
  location:string;
  agendaId:number ;
  
  constructor(private taskService:TaskService,
    private router:Router,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.agendaId = JSON.parse(sessionStorage.getItem('agendaId'));
  }

  createTask(){

     console.log(this.taskDate, this.taskTime, this.taskDescription, this.duration, this.location)
// conversion -


//var date = this.taskDate.toLocaleString("en-US", {timeZone: "America/New_York"});

    let newTask = { "taskDate": this.taskDate , "taskDescription": this.taskDescription, 
        "duration": this.duration, "location":this.location, "taskStatus":"Not Started", "agenda":{"agendaId":this.agendaId} };
    console.log(newTask)


    console.log(`created task ${this.task} for agenda ${this.agendaId}`);
    this.taskService.createTask(newTask).subscribe(
      response => {
        console.log(response);
        this.message = `Creation of Task ${this.task} Successful`;
        this.router.navigate(['task']);
      }
      
    );

  }

  goBack(){
    this.router.navigate(['task']);
  }

}
