import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registro-comerciante',
  templateUrl: './registro-comerciante.component.html',
  styleUrls: ['./registro-comerciante.component.css']
})
export class RegistroComercianteComponent implements OnInit {

  enviada: boolean = true;

  public nombre: string;
  public email: string;
  public contrasenna: string;
  public telefono: string;
  public ubicacion: string;
  public nombreCuenta: string;
  public numeroCuenta: string;

  public error: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public resetError() {
    this.error = undefined;
  }

  public enviarSolicitud() {

    if (this.email == undefined ||
      this.contrasenna == undefined ||
      this.nombre == undefined ||
      this.telefono == undefined ||
      this.ubicacion == undefined ||
      this.nombreCuenta == undefined ||
      this.numeroCuenta == undefined) {
      this.error = "No dejar campos vacíos"
      return
    }

    var json = {
      email: this.email,
      contrasena: this.contrasenna,
      nombre: this.nombre,
      telefono: this.telefono,
      ubicacion: this.ubicacion,
      nombreCuenta: this.nombreCuenta,
      numeroCuenta: this.numeroCuenta
    }

    this.loginService.enviarSolicitud(json).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      if (dato.status == "listo") {
        this.error = "Solicitud enviada"
      } else {
        this.error = "No se pudo enviar la solicitud, intente más tarde"
      }
    })
    console.log(json)
  }

}
