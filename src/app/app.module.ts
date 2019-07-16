import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TaskComponent } from './components/task/task.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResendPasswordComponent } from './components/resend-password/resend-password.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateAgendaComponent } from './components/create-agenda/create-agenda.component';
import { TypePipe } from './pipes/type.pipe';
import { IdPipe } from './pipes/id.pipe';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ModalModule } from 'ngb-modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    WelcomeComponent,
    AgendaComponent,
    TaskComponent,
    ResetPasswordComponent,
    ResendPasswordComponent,
    CreateTaskComponent,
    CreateAgendaComponent,
    TypePipe,
    IdPipe,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }