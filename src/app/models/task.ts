import { Agenda } from './agenda';
import { Time } from '@angular/common';

export class Task {

    taskId: number;
    taskDate: Date;
    taskTime: Date;
    taskDescription: string;
    duration: number;
    location: string;
    taskStatus: string;
    agenda: Agenda[];

    constructor(taskResponse: any) {
        this.taskId = taskResponse.taskId;
        this.taskDate = taskResponse.taskDate;
        this.taskDescription = taskResponse.taskDescription;
        this.duration = taskResponse.duration;
        this.location = taskResponse.location;
        this.taskStatus = taskResponse.taskStatus;
        this.agenda = taskResponse.agenda;
    }
}
