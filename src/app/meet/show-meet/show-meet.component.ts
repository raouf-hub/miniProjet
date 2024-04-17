import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-show-meet',
  templateUrl: './show-meet.component.html',
  styleUrls: ['./show-meet.component.scss'],
})
export class ShowMeetComponent {
  meets: Meet[] = [];

  constructor(
    private meetService: MeetService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadMeets();
  }

  loadMeets() {
    this.meetService.getAllMeets().subscribe(
      (data: Meet[]) => {
        this.meets = data;
      },
      (error) => {
        console.error(
          'Une erreur s\'est produite lors du chargement des meets : ',
          error,
        );
      },
    );
  }
  addMeet() {
    this.router.navigate(['/addMeet']); }
  showDetails(meetID: any) {
    this.router.navigate(['/detailMeet', meetID]);
  }

  deletetmeet(meetID: number) {
    this.meetService.deleteMeet(meetID).subscribe((data) => {
      console.log(data);
      this.loadMeets();
    });
  }
  edittimeet(meetID: any) {
    this.router.navigate(['/updateMeet', meetID]);
  }
}
