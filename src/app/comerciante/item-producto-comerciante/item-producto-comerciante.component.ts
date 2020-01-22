import { Component, OnInit, Input } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';

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
  @Input() idProducto: string;
  @Input() idPedido: string;

  listo: boolean;

  constructor(private comercianteServicio: ComercianteService) { }

  ngOnInit() {
    if (this.estado == "listo") {
      this.listo = true;
    } else {
      this.listo = false;
    }
  }

  public cambiarEstadoProducto() {
    console.log(`Estado: ${this.listo}`)
    console.log(`idProducto: ${this.idProducto}`)
    console.log(`idPedido: ${this.idPedido}`)
    this.comercianteServicio.cambiarEstadoProducto(this.idProducto, this.idPedido).subscribe(data => {
      console.log(data)
    });
  }

}
