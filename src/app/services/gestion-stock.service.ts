import { Injectable } from '@angular/core';
import { estancia, IStockCasa } from '../interfaces/i-stock-casa';

@Injectable({
  providedIn: 'root'
})
export class GestionStockService {

  listaUbicaciones : IStockCasa[] = [];
  listaEstancias : estancia[] = [];
  
  constructor() { }

  public addUbicacion(nuevaUbicacion : string){
    let ubicacion : IStockCasa = {nombre_residencia : nuevaUbicacion, estancias : []}
    this.listaUbicaciones.push(ubicacion);
  }

  public addEstancias(nuevaEstancia : string){
    let estancia : estancia = {nombre_estancia : nuevaEstancia, contenedores : []};  
    
  }

}
