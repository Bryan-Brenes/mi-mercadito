import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-ver-puestos-cliente',
  templateUrl: './ver-puestos-cliente.component.html',
  styleUrls: ['./ver-puestos-cliente.component.css']
})
export class VerPuestosClienteComponent implements OnInit {

  nombre: string;
  puestos: any;

  constructor(private clienteService: ClienteService, public sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.obtenerPuestos();
  }


  private obtenerPuestos() {
    this.clienteService.obtenerListaComerciantes().subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.puestos = dato;
    })
  }


}
