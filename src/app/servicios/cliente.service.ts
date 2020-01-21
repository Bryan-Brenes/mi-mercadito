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
}
