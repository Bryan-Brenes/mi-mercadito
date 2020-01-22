import { Component, OnInit , Input } from '@angular/core';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

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
  @Input() idProducto: string;
  @Input() idPedido: string;

  listo: boolean;

  constructor( private repartidorServicio : RepartidorService) { }

  ngOnInit() {
    if (this.estado=="listo") {
      this.listo = true;
    }else {
      this.listo = false;
    }
  }

  public cambiarEstadoProducto(){
    console.log(`Estado: ${this.listo}`)
    console.log(`idProducto: ${this.idProducto}`)
    console.log(`idPedido: ${this.idPedido}`)
    this.repartidorServicio.cambiarEstadoProducto(this.idProducto , this.idPedido).subscribe(data=>{
      console.log(data)
    });
  }

}
