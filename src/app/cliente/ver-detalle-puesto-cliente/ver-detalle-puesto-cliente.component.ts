import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-ver-detalle-puesto-cliente',
  templateUrl: './ver-detalle-puesto-cliente.component.html',
  styleUrls: ['./ver-detalle-puesto-cliente.component.css']
})
export class VerDetallePuestoClienteComponent implements OnInit {

  nombre: string;
  empresa: string = "Productos Fresquita"
  telefono: string = "8745-6725";
  correo: string = "fresquita-productos@gmail.com";
  ubicacion: string = "De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";

  constructor(private route: ActivatedRoute, public sesionCliente: SesionClienteService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerInformación();
    this.nombre = this.sesionCliente.nombre;
  }

  private obtenerInformación() {
    var id = this.route.snapshot.paramMap.get('id');
    this.clienteService.obtenerInfoComerciante(id).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data[0]));
      console.log(data)
      this.empresa = dato.nombre;
      this.telefono = dato.telefono;
      this.correo = dato.id;
      this.ubicacion = dato.ubicacion;
    })
  }

}
