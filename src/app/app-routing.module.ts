import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainComponent } from './layouts/main/main.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TaskComponent } from './components/task/task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/router-guard.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateAgendaComponent } from './components/create-agenda/create-agenda.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ResendPasswordComponent } from './components/resend-password/resend-password.component';
import {ContactComponent } from './components/contact/contact.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { CreatecontactComponent } from './components/createcontact/createcontact.component';


const routes: Routes = [
  {path:'login', component: LoginComponent }, //canActivate, RouteGuardSevice
  {path:'main', component: MainComponent},
  {path:'reset-password', component: ResetPasswordComponent, canActivate:[RouteGuardService]},
  {path:'resend-password', component: ResendPasswordComponent},
  {path:'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'agenda', component: AgendaComponent, canActivate:[RouteGuardService]},
  {path:'task', component: TaskComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'create-agenda', component: CreateAgendaComponent, canActivate:[RouteGuardService]},
  {path:'create-task', component: CreateTaskComponent, canActivate:[RouteGuardService]},
  {path:'edit-task/:id', component: EditTaskComponent},//, canActivate:[RouteGuardService]},
  { path: 'createcontact', component: CreatecontactComponent },// canActivate: [RouteGuardService] },
  { path: 'my-contacts', component: MyContactsComponent },// canActivate: [RouteGuardService] },
  { path: 'contact', component: ContactComponent },// canActivate: [RouteGuardService] },

  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
