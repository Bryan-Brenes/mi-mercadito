import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-pedidos',
  templateUrl: './item-pedidos.component.html',
  styleUrls: ['./item-pedidos.component.css']
})
export class ItemPedidosComponent implements OnInit {

  @Input() fecha: string;
  @Input() monto: string;

  constructor() { }

  ngOnInit() {
  }

}
