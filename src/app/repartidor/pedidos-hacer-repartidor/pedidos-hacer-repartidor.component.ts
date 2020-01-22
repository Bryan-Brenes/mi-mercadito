import { Component, OnInit } from '@angular/core';
import { RepartidorService } from 'src/app/servicios/repartidor.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-pedidos-hacer-repartidor',
  templateUrl: './pedidos-hacer-repartidor.component.html',
  styleUrls: ['./pedidos-hacer-repartidor.component.css']
})
export class PedidosHacerRepartidorComponent implements OnInit {


  constructor(private repartidorServicio: RepartidorService, public sesionCliente: SesionClienteService) { }
  pedidos: any;
  pedidosPorHacer:any;
  pedidosPorEnviar:any;
  nombre: string;

  ngOnInit() {
    this.obtenerPedidos();
    this.nombre = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`
  }

  private obtenerPedidos(){
    this.repartidorServicio.obtenerPedidos().subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.pedidos=dato;

      this.pedidosPorHacer = [];
      this.pedidosPorEnviar = [];
      for(let i = 0; i < this.pedidos.length; i++){
        var item = this.pedidos[i];
        if(item.transporte == '1' && item.estadopreparado == true){
          this.pedidosPorEnviar.push(item);
        } else {
          this.pedidosPorHacer.push(item);
        }
      }
      console.log(this.pedidosPorHacer)

    })
  }

}




