import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-productos',
  templateUrl: './item-productos.component.html',
  styleUrls: ['./item-productos.component.css']
})
export class ItemProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() precio: string;
  @Input() boton: string;
  @Input() id: string;
  @Input() ruta: string;


  constructor() { }

  ngOnInit() {
  }


}
