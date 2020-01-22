import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-mis-pedidos-cliente',
  templateUrl: './mis-pedidos-cliente.component.html',
  styleUrls: ['./mis-pedidos-cliente.component.css']
})
export class MisPedidosClienteComponent implements OnInit {

  public pedidos: any;
  public nombre: string;

  constructor(private clienteService: ClienteService, private sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.obtenerPedidos();
    this.nombre = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`
  }

  private obtenerPedidos() {
    this.clienteService.obtenerPedidos(this.sesionCliente.email).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.pedidos = []
      for (let i = 0; i < dato.length; i++) {
        var fechaT = new Date(dato[i].fecha);
        this.pedidos.push({
          idPedido: dato[i].idpedido,
          monto: dato[i].monto,
          fecha: `${fechaT.getDay() + 1}-${fechaT.getMonth() + 1}-${fechaT.getFullYear()}`
        })

      }
    })
  }
}
