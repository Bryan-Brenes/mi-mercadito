import { Component, OnInit, Input } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';

@Component({
  selector: 'app-item-pedido-comerciante',
  templateUrl: './item-pedido-comerciante.component.html',
  styleUrls: ['./item-pedido-comerciante.component.css']
})
export class ItemPedidoComercianteComponent implements OnInit {

  @Input() fecha: string;
  @Input() nombre: string;
  @Input() enviar: string;
  @Input() estado: string;
  @Input() ruta: string;
  @Input() idpedido: string;


  public completado: boolean;

  constructor(private comercianteServicio: ComercianteService) { }

  ngOnInit() {
    if (this.estado == 'completado') {
      this.completado = true;
    } else {
      this.completado = false;
    }
    var fechaDate = new Date(this.fecha);
    this.fecha = `${fechaDate.getDay()} / ${fechaDate.getMonth()} / ${fechaDate.getFullYear()}`;
  }

  public cambiarEstadoPedidoEntregado() {

    this.comercianteServicio.cambiarEstadoPedidoEntregado(this.idpedido).subscribe(data => {
      console.log(data)
    });
  }

}
