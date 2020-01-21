import { Component, OnInit } from '@angular/core';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  nombre: string;
  cedula: string;
  fechaNacimiento: string;
  telefono: string;
  correo: string;
  ubicacion: string;


  constructor(private sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.actualizarDatos();
  }

  public actualizarDatos() {
    var fecha = new Date(this.sesionCliente.fechaNacimiento)
    this.nombre = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`;
    this.fechaNacimiento = `${fecha.getDay() + 1}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;
    this.telefono = this.sesionCliente.telefono;
    this.correo = this.sesionCliente.email;
  }

}
