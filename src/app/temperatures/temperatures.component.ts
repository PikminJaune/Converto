// Fichier : temperatures.component.ts  
// Dév : Olivier Mathieu-Grégoire 
// Date : 4 novembre 2022

import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {

  constructor() { }
  selectionEntree: string = "Celsius";
  selectionSortie: string = "Celsius";
  nombrePrecision: string = "2";
  ReponseDuCalcul: string = "20";
  inputReponse: number = 20;

  ngOnInit(): void {

    this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
  }

  // Fonction de changement dans le HTML 
  ChangementDeValeurSelect(event: Event) {
    //--------------------------------------------------------------------------------------
    //    Entrée Celsius
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "Celsius" && this.selectionSortie == "Fahrenheit") {
      this.ReponseDuCalcul = (((this.inputReponse * 1.8) + 32).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Celsius" && this.selectionSortie == "Celsius") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Celsius" && this.selectionSortie == "Kelvin") {
      this.ReponseDuCalcul = ((this.inputReponse + 273.15).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée Fahrenheit
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "Fahrenheit" && this.selectionSortie == "Celsius") {
      this.ReponseDuCalcul = (((this.inputReponse - 32) / 1.8).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Fahrenheit" && this.selectionSortie == "Fahrenheit") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Fahrenheit" && this.selectionSortie == "Kelvin") {
      this.ReponseDuCalcul = (((this.inputReponse + 459.67) / 1.8).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée Kelvin
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "Kelvin" && this.selectionSortie == "Celsius") {
      this.ReponseDuCalcul = ((this.inputReponse - 273.15).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Kelvin" && this.selectionSortie == "Fahrenheit") {
      this.ReponseDuCalcul = (((this.inputReponse * 1.8) - 459.67).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "Kelvin" && this.selectionSortie == "Kelvin") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }
  }
}
