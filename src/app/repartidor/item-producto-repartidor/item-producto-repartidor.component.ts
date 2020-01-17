import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-item-producto-repartidor',
  templateUrl: './item-producto-repartidor.component.html',
  styleUrls: ['./item-producto-repartidor.component.css']
})
export class ItemProductoRepartidorComponent implements OnInit {
  @Input() producto: string;
  @Input() comerciante: string;
  @Input() cantidad: string;
  @Input() estado: string;

  listo: boolean;

  constructor() { }

  ngOnInit() {
    if (this.estado=="listo") {
      this.listo = true;
    }else {
      this.listo = false;
    }
  }

}
