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
  comentarios: any;

  comentarioNuevo: string;

  constructor(private route: ActivatedRoute, public sesionCliente: SesionClienteService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerInformación();
    this.obtenerComentarios();
    this.nombre = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`;
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

  private obtenerComentarios() {
    var id = this.route.snapshot.paramMap.get('id');
    this.comentarios = []
    this.clienteService.obtenerComentarios(id).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      console.log(dato)
      this.comentarios = dato;
    })
  }

  public enviarComentario() {
    if (this.comentarioNuevo != undefined) {
      var fechaObj = new Date();
      var json = {
        idCliente: this.sesionCliente.email,
        idComerciante: this.route.snapshot.paramMap.get('id'),
        comentario: this.comentarioNuevo,
        fecha: `${fechaObj.getFullYear()}-${fechaObj.getMonth() + 1}-${fechaObj.getDay() + 1}`
      }
      console.log(json)
      this.clienteService.enviarComentarios(json).subscribe(data => {
        console.log(data)
        this.obtenerComentarios()
      })
    }
  }

}
