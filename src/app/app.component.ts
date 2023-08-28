// Fichier : app.component.ts  
// Dév : Olivier Mathieu-Grégoire 
// Date : 4 novembre 2022

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP Converto';
  dimensionsVisible: boolean = true;
  poidsVisible: boolean = false;
  temperatureVisible: boolean = false;
  monnaieVisible: boolean = false;


  // Selon les cliques sur les boutons on change ce qu'on voit a l'écran 

  dimensionsClick() {
    this.dimensionsVisible = true;
    this.poidsVisible = false;
    this.temperatureVisible = false;
    this.monnaieVisible = false;
  }

  poidsClick() {
    this.dimensionsVisible = false;
    this.poidsVisible = true;
    this.temperatureVisible = false;
    this.monnaieVisible = false;
  }

  temperatureClick() {
    this.dimensionsVisible = false;
    this.poidsVisible = false;
    this.temperatureVisible = true;
    this.monnaieVisible = false;
  }

  monnaieClick() {
    this.dimensionsVisible = false;
    this.poidsVisible = false;
    this.temperatureVisible = false;
    this.monnaieVisible = true;
  }

}
