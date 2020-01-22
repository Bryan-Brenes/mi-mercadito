import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public obtenerListaComerciantes() {
    return this.http.get(this.configService.url_base + 'mostrarComerciantes');
  }

  public obtenerInfoComerciante(id: string) {
    return this.http.get(this.configService.url_base + `comerciante/${id}`);
  }

  public obtenerComentarios(id: string) {
    return this.http.get(this.configService.url_base + `comentarios/${id}`)
  }

  public enviarComentarios(info: any) {
    return this.http.post(this.configService.url_base + 'comentarios', info);
  }

  public obtenerProductos() {
    return this.http.get(this.configService.url_base + 'productos');
  }
}
