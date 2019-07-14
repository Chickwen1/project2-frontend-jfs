import { Agenda } from './agenda';

export class Task {

    constructor(
    taskId:number,
    taskDate:Date,
    taskDescription:string,
    duration:number,
    location:string,
    taskStatus:string,
    agenda:Agenda
    ){}
}
