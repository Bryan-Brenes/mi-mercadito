import { Component, OnInit, Input } from '@angular/core';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

@Component({
  selector: 'app-item-pedido-repartidor',
  templateUrl: './item-pedido-repartidor.component.html',
  styleUrls: ['./item-pedido-repartidor.component.css']
})
export class ItemPedidoRepartidorComponent implements OnInit {

  @Input() fecha: string;
  @Input() nombre: string;
  @Input() enviar: string;
  @Input() estado: string;
  @Input() ruta: string ;
  @Input() idpedido: string;


  public completado: boolean;

  constructor( private repartidorServicio : RepartidorService) { }

  ngOnInit() {
    if (this.estado == 'completado') {
      this.completado = true;
    } else {
      this.completado = false;
    }
    var fechaDate = new Date(this.fecha);
    this.fecha = `${fechaDate.getDay()} / ${fechaDate.getMonth()} / ${fechaDate.getFullYear()}`;
  }

  public cambiarEstadoPedidoEntregado(){

    this.repartidorServicio.cambiarEstadoPedidoEntregado(this.idpedido).subscribe(data=>{
      console.log(data)
    });
  }

}
