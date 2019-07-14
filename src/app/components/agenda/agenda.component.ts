import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  
 
  selectedType: string;

  constructor(private agendaService:AgendaService, private taskService:TaskService, private router:Router) { }

  ngOnInit() {
    this.list();
  }

  agendaId: number;
  sessionAgendaId: string;
  agendas = [];

  list() {
    this.agendaService.list().subscribe((res) => {
      console.log(res);
      this.agendas = res;
    });
  }

  view(agendaId){
    console.log(`view ${agendaId}`);
    //this.sessionAgendaId = this.agendaId.toString();
    sessionStorage.setItem('agendaId', `${agendaId}`)
    this.router.navigate(['task'])
  }
}
