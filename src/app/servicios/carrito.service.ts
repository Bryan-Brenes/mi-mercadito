import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public productos: any = [];
  public direccion: string;
  public informacionTarjeta: any;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public obtenerInfoProducto(id: any) {
    return this.http.get(this.configService.url_base + `producto/${id}`)
  }

  public agregarProducto(json: any) {
    this.productos.push(json);
  }
}
