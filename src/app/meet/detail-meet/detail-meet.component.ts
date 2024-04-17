import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-detail-meet',
  templateUrl: './detail-meet.component.html',
  styleUrls: ['./detail-meet.component.scss']
})
export class DetailMeetComponent {
  meetId!: number;
  meet!: Meet;

  constructor(
    private route: ActivatedRoute,
    private meetService: MeetService,
  ) {}

  ngOnInit(): void {
    this.meetId = this.route.snapshot.params['id']; // Récupérer l'identifiant du Meet depuis l'URL
    this.loadMeetDetails();
  }

  loadMeetDetails() {
    this.meetService.getMeetbyId(this.meetId).subscribe(
      (data: Meet) => {
        this.meet = data;
      },
      (error) => {
        console.error(
          'Erreur lors du chargement des détails du Meet : ',
          error,
        );
      },
    );
  }
}
