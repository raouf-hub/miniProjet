import { Component } from '@angular/core';

@Component({
  selector: 'app-foyer3d',
  templateUrl: './foyer3d.component.html',
  styleUrls: ['./foyer3d.component.scss']
})
export class Foyer3dComponent {
  couleur: string = '#5B9D6A  ';
  isHovered: boolean = false;
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

}
