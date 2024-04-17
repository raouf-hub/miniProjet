import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-planning-meet',
  templateUrl: './planning-meet.component.html',
  styleUrls: ['./planning-meet.component.scss'],
})
export class PlanningMeetComponent implements OnInit {
  @ViewChild('calendarContainer') calendarContainer!: ElementRef;
  meets: Meet[] = [];
 
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: this.loadMeets.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(
    private dialog: MatDialog,
    private meetService: MeetService,
    private notificationService: NotificationService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    private localStorageService: LocalStorageService
    , private _snackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    // Vérifier si une mise à jour réussie a été effectuée
    const updateSuccess = this.localStorageService.getUpdateSuccessIndicator();
    if (updateSuccess) {
      // Afficher la notification de mise à jour réussie sous forme de toast
      this.openSnackBar('The planning has been updated', 'Close');
      // Effacer l'indicateur de mise à jour réussie du stockage local
      this.localStorageService.clearUpdateSuccessIndicator();
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'] // Utilisez la classe CSS personnalisée ici
    });
  }
  
  
  
  async loadMeets(fetchInfo: any, successCallback: any, failureCallback: any): Promise<void> {
    try {
      const data = await this.meetService.getAllMeets().toPromise();
      if (data) {
        this.meets = data as Meet[];

        const events: EventInput[] = this.meets.map((meet) => ({
          title: meet.title || '',
          start: meet.startDate,
          end: meet.endDate,
        }));

        successCallback(events);
      } else {
        console.error('Les données des réunions sont indéfinies.');
        failureCallback();
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des réunions :", error);
      failureCallback();
    }
  }

  handleEventClick(info: any): void {
    const meetId = info.event.id; // Supposons que l'identifiant de la réunion soit défini dans l'événement FullCalendar
    this.openMeetDetails(meetId);
  }

  openMeetDetails(meetId: string): void {
    console.log('Trying to open meeting details for ID:', meetId);
    // Implémentez l'ouverture des détails de la réunion ici, par exemple, à l'aide d'une boîte de dialogue
  }

  handleDateClick(arg: any): void {
    alert('date click! ' + arg.dateStr);
  }

  downloadAsPDF(): void {
    if (this.calendarContainer) {
      const calendarContainer = this.calendarContainer.nativeElement;

      html2canvas(calendarContainer).then((canvas) => {
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // Orientation portrait, taille A4
        const imgWidth = 210; // Largeur de la page PDF
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('planning.pdf'); // Téléchargement du fichier PDF
      });
    } else {
      console.error('Le conteneur du calendrier est indéfini.');
    }
  }
}
