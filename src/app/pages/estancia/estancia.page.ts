import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonItem, IonList, IonLabel, IonModal, IonButton, IonFabButton, IonFab, IonIcon, IonMenuButton, IonInput } from '@ionic/angular/standalone';
import { GestionStockService } from 'src/app/services/gestion-stock.service';

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.page.html',
  styleUrls: ['./estancia.page.scss'],
  standalone: true,
  imports: [IonInput, IonIcon, IonFab, IonFabButton, IonButton, IonModal, IonLabel, IonList, IonItem, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class EstanciaPage implements OnInit {

  constructor(public servicio : GestionStockService) { }


  

  ngOnInit() {
  }

}
