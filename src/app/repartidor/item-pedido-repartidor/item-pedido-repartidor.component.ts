import { Component, OnInit, Input } from '@angular/core';

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

  public completado: boolean;

  constructor() { }

  ngOnInit() {
    if (this.estado == 'completado') {
      this.completado = true;
    } else {
      this.completado = false;
    }
  }


}
