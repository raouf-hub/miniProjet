import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';
import { NotificationService } from 'src/app/services/notification.service'; // Assurez-vous que le service est correctement importé
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-update-meet',
  templateUrl: './update-meet.component.html',
  styleUrls: ['./update-meet.component.scss'],
})
export class UpdateMeetComponent implements OnInit {
  meetForm!: FormGroup;
  meetId: any;

  constructor(
    private formBuilder: FormBuilder,
    private meetService: MeetService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService // Injection du service de notification
  ) { }

  ngOnInit() {
    this.meetId = this.route.snapshot.params['id'];
    this.initMeetForm();
    this.loadMeet();
  }

  initMeetForm() {
    this.meetForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  loadMeet() {
    this.meetService.getMeetbyId(this.meetId).subscribe(
      (data: Meet) => {
        this.meetForm.patchValue(data);
      },
      (error) => {
        console.error('Erreur lors du chargement du Meet : ', error);
      },
    );
  }

  // Méthode pour mettre à jour la réunion
  updateMeet() {
    if (this.meetForm.valid) {
      const updatedMeet: Meet = this.meetForm.value;
      const meetId = this.meetId;

      this.meetService.updateMeetId(updatedMeet, meetId).subscribe(
        () => {
          this.router.navigate(['/ListMeet']);
          // Récupérer le titre du meeting mis à jour
          const updatedTitle = updatedMeet.title + ' updated';
          // Envoyer la notification avec le titre mis à jour
          this.notificationService.sendNotification(`The course "${updatedTitle}" has been updated`);
          // Stocker l'indicateur de mise à jour réussie dans le stockage local
          this.localStorageService.setUpdateSuccessIndicator(true);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du Meet : ', error);
        }
      );
    } else {
      // Afficher des messages d'erreur ou gérer la validation du formulaire
    }
  }





}
