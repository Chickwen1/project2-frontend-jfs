import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  
 
  selectedType: string;

  constructor(private agendaService:AgendaService, 
    private taskService:TaskService, private router:Router) { }

  ngOnInit() {
    this.refreshAgendas();
  }

  agendaId: number;
  type;string;
  sessionAgendaId: string;
  agendas : Agenda[];
  message: string;
  user:User;

  refreshAgendas() {
    this.agendaService.list().subscribe((res) => {
      console.log(res);
      this.agendas = res;
    });
  }

  deleteAgenda(agendaId){
    console.log(`delete agenda ${agendaId}`);
    this.agendaService.deleteAgenda(agendaId).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Agenda ${agendaId} was Successful`;
        this.refreshAgendas();
      }
    );
  }

  view(agendaId, type){
    console.log(`view ${agendaId}, ${type}`);
    sessionStorage.setItem('agendaId', `${agendaId}`)
    sessionStorage.setItem('agendaType', `${type}`)
    this.router.navigate(['task'])
  }

  createAgenda(){
    this.router.navigate(['create-agenda'])
  }
}
