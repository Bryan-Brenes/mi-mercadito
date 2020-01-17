import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  @Input() nombre: string;
  @Input() cantidad: string;
  @Input() montoxKg: string;
  @Input() montoxUnidad: string;

  constructor() { }

  ngOnInit() {
  }

}
