import {Component} from '@angular/core';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent {

  tituloExamen: string = 'Examen Angular - Milton Cabrera';

  constructor() {
  }

  createEvent() {
    this.create();

  }

  private create(): void {

  }


}
