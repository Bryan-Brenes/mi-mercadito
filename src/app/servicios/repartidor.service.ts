import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  constructor( private http: HttpClient  , private configService:ConfigService ) { }
  
  public obtenerPedidos(){
    return this.http.get(this.configService.url_base+'pedidos')
  }

}