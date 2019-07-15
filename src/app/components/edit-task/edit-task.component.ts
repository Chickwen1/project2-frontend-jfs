import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  id: number;
  task: Task;
  agenda: Agenda;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    //this.task = new Task(0,new Date(),'',1,'','', this.agenda)

    if (this.id != 1) {
      this.taskService.retrieveTask(this.id)
        .subscribe(
          data => this.task = data
        );
    }
  }

  saveTask() {
    if (this.id === -1) {
      console.log(this.id, this.task)
      this.taskService.createTask(this.id, this.task)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['task']);
          }
        )
    } else {
      this.taskService.updateTask(this.id, this.task)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['task']);
          }
        )
    }

  }

}
