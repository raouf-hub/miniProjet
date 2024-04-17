import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // Assurez-vous d'importer FullCalendarModule depuis @fullcalendar/angular

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { RouterModule } from '@angular/router';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { UpdateChatComponent } from './chat/update-chat/update-chat.component';
import { DetailChatComponent } from './chat/detail-chat/detail-chat.component';
import { ListMessageComponent } from './message/list-message/list-message.component';
import { AddMessageComponent } from './message/add-message/add-message.component';
import { UpdateMessageComponent } from './message/update-message/update-message.component';
import { DetailMessageComponent } from './message/detail-message/detail-message.component';
import { ShowListMessageComponent } from './message/show-list-message/show-list-message.component';
import { NavFrontComponent } from './nav-front/nav-front.component';
import { AddMeetComponent } from './meet/add-meet/add-meet.component';
import { DetailMeetComponent } from './meet/detail-meet/detail-meet.component';
import { PlanningMeetComponent } from './meet/planning-meet/planning-meet.component';
import { ShowMeetComponent } from './meet/show-meet/show-meet.component';
import { UpdateMeetComponent } from './meet/update-meet/update-meet.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlanningcoursComponent } from './meet/planningcours/planningcours.component';
import { NotificationComponent } from './meet/notification/notification.component';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    DashboardComponent,
    AddChatComponent,
    ListChatComponent,
    UpdateChatComponent,
    DetailChatComponent,
    ListMessageComponent,
    AddMessageComponent,
    UpdateMessageComponent,
    DetailMessageComponent,
    ShowListMessageComponent,
    NavFrontComponent,
    AddMeetComponent,
    DetailMeetComponent,
    PlanningMeetComponent,
    ShowMeetComponent,
    UpdateMeetComponent,
    PlanningcoursComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgChartsModule,
    RouterModule,
    FullCalendarModule,
    MatDialogModule,
    ScheduleModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
