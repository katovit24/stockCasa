import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { IStockCasa } from 'src/app/interfaces/i-stock-casa';
import { GestionStockService } from 'src/app/services/gestion-stock.service';

@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.page.html',
  styleUrls: ['./residencias.page.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonImg, IonAvatar, IonItem, IonList, IonButton, IonModal, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ResidenciasPage implements OnInit {


  
  nombreUbicacion : string = "";


  constructor(public servicio : GestionStockService) {
    addIcons({ add });
   }

   
  ngOnInit() {
  }

  public crearUbicacion(nombreUbicacion : string){
    this.servicio.addUbicacion(nombreUbicacion);
    this.nombreUbicacion="";
  }
}
