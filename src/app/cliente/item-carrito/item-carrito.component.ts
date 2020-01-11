import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.css']
})
export class ItemCarritoComponent implements OnInit {

  @Input() nombre: string;
  @Input() cantidad: string;
  @Input() monto: string;


  constructor() { }

  ngOnInit() {
  }

}
