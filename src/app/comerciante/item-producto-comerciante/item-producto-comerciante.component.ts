import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-producto-comerciante',
  templateUrl: './item-producto-comerciante.component.html',
  styleUrls: ['./item-producto-comerciante.component.css']
})
export class ItemProductoComercianteComponent implements OnInit {
  @Input() producto: string;
  @Input() comerciante: string;
  @Input() cantidad: string;
  @Input() estado: string;

  listo: boolean;

  constructor() { }

  ngOnInit() {
    if (this.estado == "listo") {
      this.listo = true;
    } else {
      this.listo = false;
    }
  }

}
