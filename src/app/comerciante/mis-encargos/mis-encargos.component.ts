import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';

@Component({
  selector: 'app-mis-encargos',
  templateUrl: './mis-encargos.component.html',
  styleUrls: ['./mis-encargos.component.css']
})
export class MisEncargosComponent implements OnInit {

  nombre: string;
  pedidos: any;
  pedidosPorHacer: any;
  pedidosPorEnviar: any;

  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService) { }

  ngOnInit() {
    this.nombre = this.sesionComerciante.nombre;
    this.obtenerPedidos();
  }

  private obtenerPedidos() {
    this.comercianteService.obtenerPedidos().subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.pedidos = dato;

      this.pedidosPorHacer = [];
      this.pedidosPorEnviar = [];
      for (let i = 0; i < this.pedidos.length; i++) {
        var item = this.pedidos[i];
        if (item.transporte == '1' && item.estadopreparado == true) {
          this.pedidosPorEnviar.push(item);
        } else {
          this.pedidosPorHacer.push(item);
        }
      }
      console.log(this.pedidosPorHacer)

    })
  }

}
