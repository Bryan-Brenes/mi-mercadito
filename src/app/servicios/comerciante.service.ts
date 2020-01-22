import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ComercianteService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public obtenerInventario(id: string) {
    return this.http.get(this.configService.url_base + `inventario/${id}`);
  }

  public obtenerComentarios(id: string) {
    return this.http.get(this.configService.url_base + `comentarios/${id}`)
  }

  public obtenerProductosPuesto(id: string) {
    return this.http.get(this.configService.url_base + `invertario/productosFeria/${id}`)
  }

  public obtenerInfoProducto(id: string, idP: string) {
    return this.http.get(this.configService.url_base + `inventario/detalle/${id}/${idP}`)
  }

  public agregarProductoInventario(info: any) {
    return this.http.post(this.configService.url_base + 'producto', info)
  }

  public eliminarProductoInventario(id: string, idP: string) {
    return this.http.delete(this.configService.url_base + `producto/${id}/${idP}`)
  }

  public eliminarProductoFeria(id: string, idP: string) {
    return this.http.delete(this.configService.url_base + `productosPorFeria/${id}/${idP}`)
  }

  public agregarProductoPuesto(info: any) {
    return this.http.post(this.configService.url_base + 'productosPorFeria', info)
  }

  public obtenerPedidos() {
    return this.http.get(this.configService.url_base + 'pedidos')
  }

  public verDetallesPedido(id: any) {
    return this.http.get(this.configService.url_base + 'pedidos/detalle/' + id)
  }

  public cambiarEstadoPedidoEntregado(id: any) {
    return this.http.get(this.configService.url_base + 'pedidos/entregar/' + id)
  }

  public cambiarEstadoProducto(id: any, idPedido: any) {
    return this.http.get(this.configService.url_base + 'pedidos/producto/' + id + '/' + idPedido)
  }


}
