// Fichier : dimensions.component.ts  
// Dév : Olivier Mathieu-Grégoire 
// Date : 4 novembre 2022

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  selectionEntree: string = "m";
  selectionSortie: string = "mm";
  nombrePrecision: string = "2";
  nombreDimension: string = "1";

  ReponseDuCalculLongeur = "1";
  inputReponseLongeur: number = 1;

  ReponseDuCalculLargeur: string = "1";
  inputReponseLargeur: number = 1;

  ReponseDuCalculProfondeur = "1";
  inputReponseProfondeur: number = 1;

  nombreSurfaceEntree: string = "0";
  nombreSurfaceSortie: string = "0";

  nombreVolumeEntree: string = "0";
  nombreVolumeSortie: string = "0";

  VoirLargeur: boolean = false;
  VoirProfondeur: boolean = false;

  VoirCalculLargeur: boolean = false;
  VoirCalculProfondeur: boolean = false;


  constructor() { }

  ngOnInit(): void {
    // Lorsque l'application démarre on a déjà des valeurs par défaut qu'on doit afficher
    this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    this.nombreSurfaceEntree = (this.inputReponseLongeur * this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreSurfaceSortie = (parseInt(this.ReponseDuCalculLargeur) * parseInt(this.ReponseDuCalculLongeur)).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreVolumeEntree = (this.inputReponseLongeur * this.inputReponseLargeur * this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreVolumeSortie = (parseInt(this.ReponseDuCalculLargeur) * parseInt(this.ReponseDuCalculLongeur) * parseInt(this.ReponseDuCalculProfondeur))
      .toFixed(parseInt(this.nombrePrecision))
      .toString();
  }

  ChangementDeDimension(event: Event) {
    // Section dimension , permet d'afficher ou de cacher certaines zones 
    switch (this.nombreDimension) {
      case "1":
        this.VoirLargeur = false;
        this.VoirProfondeur = false;
        this.VoirCalculProfondeur = false;
        this.VoirCalculLargeur = false;
        break;
      case "2":
        this.VoirLargeur = true;
        this.VoirProfondeur = false;
        this.VoirCalculLargeur = true;
        this.VoirCalculProfondeur = false;
        break;
      case "3":
        this.VoirProfondeur = true;
        this.VoirLargeur = true;
        this.VoirCalculLargeur = false;
        this.VoirCalculProfondeur = true;
    }
  }



  ChangementDeValeurSelect(event: Event) {
    //--------------------------------------------------------------------------------------
    //    Entrée en mm
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "mm" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 10).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 10).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 10).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mm" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée en cm 
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "cm" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 0.1).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 0.1).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 0.1).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 100).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 100).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 100).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 100000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 100000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 100000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 30.48).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 30.48).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 30.48).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.010936).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.010936).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.010936).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "cm" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.0000062137).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.0000062137).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.0000062137).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée en m 
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "m" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 100).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 100).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 100).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 39.370).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 39.370).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 39.370).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1.0936).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1.0936).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1.0936).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "m" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.00062137).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.00062137).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.00062137).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée en km 
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "km" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 100000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 100000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 100000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1093.6133).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1093.6133).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1093.6133).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "km" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1.609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1.609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1.609344).toFixed(parseInt(this.nombrePrecision))).toString();
    }


    //--------------------------------------------------------------------------------------
    //    Entrée en pouce
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "pouce" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 25.4).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 2.54).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.0254).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.0254).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.0254).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 39370.07874).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 12).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 12).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 12).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 36).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 36).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 36).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pouce" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée en pied
    //--------------------------------------------------------------------------------------

    if (this.selectionEntree == "pied" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 304.8).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 0.032808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 0.032808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 0.032808).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 3.2808).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 3280.8399).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 12).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 12).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 12).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 3).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 3).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 3).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "pied" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.00018939).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.00018939).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.00018939).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée en verge
    //--------------------------------------------------------------------------------------

    if (this.selectionEntree == "verge" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 914.4).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 91.44).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 91.44).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 91.44).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.9144).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.9144).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.9144).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "km") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 0.0009144).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 0.0009144).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 0.0009144).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 36).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 36).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 36).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 3).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 3).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 3).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "verge" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur / 1760).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur / 1760).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur / 1760).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée en mile 
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "mile" && this.selectionSortie == "mm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1609344).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "cm") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 160934.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 160934.4).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 160934.4).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "m") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1609.344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1609.344).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1609.344).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "pouce") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 63360.00253).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "pied") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 5280).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 5280).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 5280).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "verge") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur * 1760).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur * 1760).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur * 1760).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "mile" && this.selectionSortie == "mile") {
      this.ReponseDuCalculLongeur = ((this.inputReponseLongeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculLargeur = ((this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision))).toString();
      this.ReponseDuCalculProfondeur = ((this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    // Zone de calcul qui se est commun a tout les condition alors on le met qu'une seule fois à la fin 
    this.nombreSurfaceEntree = (this.inputReponseLongeur * this.inputReponseLargeur).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreSurfaceSortie = (parseFloat(this.ReponseDuCalculLargeur) * parseFloat(this.ReponseDuCalculLongeur)).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreVolumeEntree = (this.inputReponseLongeur * this.inputReponseLargeur * this.inputReponseProfondeur).toFixed(parseInt(this.nombrePrecision)).toString();
    this.nombreVolumeSortie = (parseFloat(this.ReponseDuCalculLargeur) * parseFloat(this.ReponseDuCalculLongeur) * parseFloat(this.ReponseDuCalculProfondeur))
      .toFixed(parseInt(this.nombrePrecision))
      .toString();

  }

}
