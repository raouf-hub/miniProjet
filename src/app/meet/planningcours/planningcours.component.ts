import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-planningcours',
  templateUrl: './planningcours.component.html',
  styleUrls: ['./planningcours.component.scss'],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
})
export class PlanningcoursComponent implements OnInit {
  meets: Meet[] = [];
  public eventSettings: EventSettingsModel = { dataSource: [] }; // Initialize eventSettings with an empty array
  selectedDate: Date = new Date();

  constructor(private meetService: MeetService) {}

  ngOnInit(): void {
    this.loadMeets();
  }

  loadMeets(): void {
    this.meetService.getAllMeets().subscribe(
      (data: Meet[]) => {
        this.meets = data;

        const events: EventInput[] = this.meets.map((meet) => ({
          id: meet.meetID !== undefined ? meet.meetID.toString() : '',
          title: meet.title,
          start: meet.startDate,
          end: meet.endDate,
        }));

        // Update eventSettings with the retrieved events
        this.eventSettings = { dataSource: events };
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des réunions :",
          error
        );
      }
    );
  }
}
