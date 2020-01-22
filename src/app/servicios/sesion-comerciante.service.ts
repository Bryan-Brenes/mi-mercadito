import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionComercianteService {

  public email: string;
  public nombre: string;
  public ubicacion: string;
  public foto: string;
  public telefono: string;

  constructor() { }
}
