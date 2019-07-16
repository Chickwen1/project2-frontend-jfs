import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-agenda',
  templateUrl: './create-agenda.component.html',
  styleUrls: ['./create-agenda.component.css']
})
export class CreateAgendaComponent implements OnInit {

  type:string;
  
  constructor(private agendaService:AgendaService,
    private router:Router) { }

  ngOnInit() {
  }

  createNewAgenda(){
    this.agendaService.createNewAgenda(this.type).subscribe((res) => {
      console.log(res);
      this.router.navigate(['agenda'])

    });
  }
  goBack(){
    this.router.navigate(['agenda']);
  }
}
