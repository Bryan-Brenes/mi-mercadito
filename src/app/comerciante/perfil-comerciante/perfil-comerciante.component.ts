import { Component, OnInit } from '@angular/core';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';
import { ComercianteService } from "src/app/servicios/comerciante.service";

@Component({
  selector: 'app-perfil-comerciante',
  templateUrl: './perfil-comerciante.component.html',
  styleUrls: ['./perfil-comerciante.component.css']
})
export class PerfilComercianteComponent implements OnInit {

  nombre: string;
  telefono: string;
  correo: string;
  ubicacion: string;
  comentarios: any;

  constructor(private sesionComerciante: SesionComercianteService, private comercianteService: ComercianteService) { }

  ngOnInit() {
    this.actualizarDatos();
    this.obtenerComentarios();
  }

  public actualizarDatos() {
    this.nombre = this.sesionComerciante.nombre;
    this.telefono = this.sesionComerciante.telefono;
    this.correo = this.sesionComerciante.email;
    this.ubicacion = this.sesionComerciante.ubicacion;
  }

  private obtenerComentarios() {
    console.log(this.correo);
    this.comentarios = [];
    this.comercianteService.obtenerComentarios(this.correo).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      console.log(dato)
      this.comentarios = dato;
    })
  }

}
