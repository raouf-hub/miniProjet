import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { DetailChatComponent } from './chat/detail-chat/detail-chat.component';
import { UpdateChatComponent } from './chat/update-chat/update-chat.component';
import { ListMessageComponent } from './message/list-message/list-message.component';
import { AddMessageComponent } from './message/add-message/add-message.component';
import { UpdateMessageComponent } from './message/update-message/update-message.component';
import { DetailMessageComponent } from './message/detail-message/detail-message.component';
import { ShowListMessageComponent } from './message/show-list-message/show-list-message.component';
import { PlanningMeetComponent } from './meet/planning-meet/planning-meet.component';
import { DetailMeetComponent } from './meet/detail-meet/detail-meet.component';
import { UpdateMeetComponent } from './meet/update-meet/update-meet.component';
import { AddMeetComponent } from './meet/add-meet/add-meet.component';
import { ShowMeetComponent } from './meet/show-meet/show-meet.component';
import { PlanningcoursComponent } from './meet/planningcours/planningcours.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'listChat', component: ListChatComponent },
      { path: 'addChat', component: AddChatComponent },
      { path: 'detailChat/:chatID', component: DetailChatComponent },
      { path: 'updateChat/:chatID', component: UpdateChatComponent },
      { path: 'listMessage', component: ListMessageComponent },
      { path: 'addMessage', component: AddMessageComponent },
      { path: 'updateMessage/:messageID', component: UpdateMessageComponent },
      { path: 'detailMessage/:messageID', component: DetailMessageComponent },
      {
        path: 'ListMeet',
        component: ShowMeetComponent,
      },
      {
        path: 'addMeet',
        component: AddMeetComponent,
      },
      {
        path: 'updateMeet/:id',
        component: UpdateMeetComponent,
      },
      {
        path: 'detailMeet/:id',
        component: DetailMeetComponent,
      },
    ],
  },

  { path: 'showlistmsg', component: ShowListMessageComponent },
  { path: 'planning', component: PlanningMeetComponent },
  { path: 'planningc', component: PlanningcoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
