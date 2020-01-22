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

  public verDetallesPedido(id: any){
    return this.http.get(this.configService.url_base+'pedidos/detalle/'+id)
  }

  public cambiarEstadoPedidoEntregado(id: any){
    return this.http.get(this.configService.url_base+'pedidos/entregar/'+id)
  }
  
  public cambiarEstadoProducto(id: any , idPedido : any){
    return this.http.get(this.configService.url_base+'pedidos/producto/'+id + '/' + idPedido)
  }


}