import { User } from './user';

export class Agenda {

    agendaId:number;
    user:User;
    type:string;

    constructor(agendaResponse: any) {
        this.agendaId = agendaResponse.taskId;
        this.user = agendaResponse.user;
        this.type = agendaResponse.type;
    }

}