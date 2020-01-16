import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-factura-cliente',
  templateUrl: './item-factura-cliente.component.html',
  styleUrls: ['./item-factura-cliente.component.css']
})
export class ItemFacturaClienteComponent implements OnInit {

  @Input() nombre: string;
  @Input() cantidad: string;
  @Input() precio: string;

  constructor() { }

  ngOnInit() {
  }

}
