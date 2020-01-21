import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getContrasenna(email: string) {
    return this.http.get(this.config.url_base + `login/${email}`);
  }

  public obtenerCliente(email: string) {
    return this.http.get(this.config.url_base + `cliente/${email}`);
  }

  public agregarCliente(info: any) {
    return this.http.post(this.config.url_base + `cliente`, info);
  }

  /**
   * Envia un solicitud para comerciantes
   * @param info , json para la consulta
   */
  public enviarSolicitud(info: any) {
    return this.http.post(this.config.url_base + "solicitudComerciante", info)
  }
}
