// Fichier : monnaie.component.ts  
// Dév : Olivier Mathieu-Grégoire 
// Date : 4 novembre 2022

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taux } from 'src/Taux';


@Component({
  selector: 'app-monnaie',
  templateUrl: './monnaie.component.html',
  styleUrls: ['./monnaie.component.css']
})
export class MonnaieComponent implements OnInit {

  tabTaux: Taux[] = [];
  constructor(private http: HttpClient) { }
  tabAnnee: number[] = new Array();

  nombrePrecision: number = 2;
  anEntree: string = "1971";
  anSortie: string = "1971";
  inputValeur: number = 100;
  ReponseCalcul: string = "0";
  ReponseTemporaire: number = 0;
  ReponseCumul: string = "0";

  ngOnInit(): void {

    this.ReponseCalcul = this.inputValeur.toString();
    // On va chercher les informations du script PHP ( json ) pour les mettres dans une liste de Taux
    this.InitListTaux();

    // Valeurs par défaut
    this.ReponseTemporaire = this.inputValeur * (0.0493 + 1);
    this.ReponseCalcul = this.ReponseTemporaire.toFixed((this.nombrePrecision));

  }

  // Fonction qui fais l'appel a l'url avec l'objet http
  InitListTaux() {
    let url = "https://amartel.techinfo-cstj.ca/getIPC.php"

    this.http.get<Taux[]>(url).subscribe(tableauTaux => {

      this.tabTaux = tableauTaux;
    });
  }

  // Fonction pour chaque changement dans le HTML 
  ChangementDeValeurSelect() {

    this.ReponseTemporaire = this.inputValeur;

    // Si l'année d'entrée est plus petit que l'année de sortie 
    if (this.anEntree < this.anSortie) {
      this.tabTaux.forEach(e => {
        if (e.an <= parseInt(this.anSortie) && e.an >= parseInt(this.anEntree)) {
          this.ReponseTemporaire = this.ReponseTemporaire * (e.taux + 1);
        }
      });
      this.ReponseCalcul = this.ReponseTemporaire.toFixed((this.nombrePrecision));
    }

    // Si l'année d'entrée est égale a l'année de sortie
    if (this.anEntree == this.anSortie) {
      this.tabTaux.forEach(e => {
        if (e.an == parseInt(this.anEntree)) {
          this.ReponseTemporaire = this.ReponseTemporaire * (e.taux + 1);
        }
      });
      this.ReponseCalcul = this.ReponseTemporaire.toFixed((this.nombrePrecision));
    }

    // Si l'année sortie est plus petit que l'année de d'entrée 
    if (this.anEntree > this.anSortie) {
      this.tabTaux.forEach(e => {
        if (e.an <= parseInt(this.anEntree) && e.an >= parseInt(this.anSortie)) {
          this.ReponseTemporaire = this.ReponseTemporaire / (e.taux + 1);
        }
      });
      this.ReponseCalcul = this.ReponseTemporaire.toFixed((this.nombrePrecision));
    }
  }
}
