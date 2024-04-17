import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meet } from 'src/app/model/Meet';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-add-meet',
  templateUrl: './add-meet.component.html',
  styleUrls: ['./add-meet.component.scss'],
})
export class AddMeetComponent {
  meetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private meetService: MeetService,
    private router: Router
  ) {
    this.meetForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.meetForm.valid) {
      const { title, startDate, endDate } = this.meetForm.value;
      const newMeet: Meet = new Meet(title, startDate, endDate);
      this.meetService.addMeet(newMeet).subscribe(
        () => {
          console.log('Meet ajouté avec succès !');
          this.router.navigate(['/ListMeet']);
          this.meetForm.reset();
        },
        (error) => {
          console.error("Erreur lors de l'ajout du Meet :", error);
        }
      );
    } else {
      console.error("Le formulaire n'est pas valide.");
    }
  }
}
