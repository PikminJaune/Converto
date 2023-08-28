// Fichier : poids.component.ts  
// Dév : Olivier Mathieu-Grégoire 
// Date : 4 novembre 2022
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  constructor() { }
  nombrePrecision: string = "2";
  selectionSortie: string = "g";
  selectionEntree: string = "g";
  ReponseDuCalcul: string = "";
  inputReponse: number = 1;

  ngOnInit(): void {
    this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();

  }

  ChangementDeValeurSelect(event: Event) {
    //--------------------------------------------------------------------------------------
    //    Entrée G
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "g" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "g" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "g" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse / 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "g" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.035274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "g" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.0022046).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "g" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.0000011023).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée KG
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "kg" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "kg" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "kg" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse / 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "kg" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse * 35.274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "kg" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse * 2.2046).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "kg" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.0011023).toFixed(parseInt(this.nombrePrecision))).toString();
    }
    //--------------------------------------------------------------------------------------
    //    Entrée tonne mét
    //--------------------------------------------------------------------------------------
    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse * 1000000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse * 1000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse * 35274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse * 2204.6).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne mét" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse * 1.1023).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée Once 
    //--------------------------------------------------------------------------------------

    if (this.selectionEntree == "once" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse / 0.035274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "once" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse / 35.274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "once" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse / 35274).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "once" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "once" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.062500).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "once" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.000031250).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée Livre 
    //--------------------------------------------------------------------------------------

    if (this.selectionEntree == "livre" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse / 0.0022046).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "livre" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse / 2.2046).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "livre" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse / 2204.6).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "livre" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse * 16.000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "livre" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "livre" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse * 0.00050000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    //--------------------------------------------------------------------------------------
    //    Entrée tonne courte
    //--------------------------------------------------------------------------------------

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "g") {
      this.ReponseDuCalcul = ((this.inputReponse / 0.0000011023).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "kg") {
      this.ReponseDuCalcul = ((this.inputReponse / 0.0011023).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "tonne mét") {
      this.ReponseDuCalcul = ((this.inputReponse / 1.1023).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "once") {
      this.ReponseDuCalcul = ((this.inputReponse * 32000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "livre") {
      this.ReponseDuCalcul = ((this.inputReponse * 2000).toFixed(parseInt(this.nombrePrecision))).toString();
    }

    if (this.selectionEntree == "tonne courte" && this.selectionSortie == "tonne courte") {
      this.ReponseDuCalcul = ((this.inputReponse).toFixed(parseInt(this.nombrePrecision))).toString();
    }
  }
}