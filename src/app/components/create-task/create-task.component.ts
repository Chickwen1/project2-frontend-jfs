import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { Agenda } from 'src/app/models/agenda';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

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
  taskDescription:string;
  duration:number;
  location:string;
  agendaId:number ;
  time = {hour: 13, minute: 30};
  
  constructor(private taskService:TaskService,
    private router:Router,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.agendaId = JSON.parse(sessionStorage.getItem('agendaId'));
  }

  selectToday() {
    console.log(this.model)
    this.model = this.calendar.getToday();
  }

  createTask(){

     console.log(this.taskDate, this.taskDescription, this.duration, this.location)

    let newTask = { "taskDate": this.taskDate, "taskDescription": this.taskDescription, 
        "duration": this.duration, "location":this.location, "taskStatus":"Not Started", "agenda":{"agendaId":this.agendaId} };



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
