import { Component, OnInit, Input } from '@angular/core';

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
