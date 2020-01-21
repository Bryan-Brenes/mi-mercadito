import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionClienteService {

  public email: string;
  public nombre: string;
  public apellido: string;
  public fechaNacimiento: string;
  public foto: string;
  public telefono: string;

  constructor() { }
}
