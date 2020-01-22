import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient  , private configService:ConfigService) { }

  public obtenerSolicitudesPendientes(){
    return this.http.get(this.configService.url_base+'solicitudesPendientes')
  }
  public verPerfilSolicitudes(id: any){
    return this.http.get(this.configService.url_base+'perfilSolicitud/'+id)
  }
  public aceptarSolicitud(id: any){
    return this.http.put(this.configService.url_base+'solicitudComerciante/aceptar/'+id, {})
  }

  public agregarRepartidor(json:any){
    return this.http.post(this.configService.url_base+'repartidor/agregar', json)
  }

  
  public mostrarRepartidor(){
    return this.http.get(this.configService.url_base+'repartidores')
  }

}


