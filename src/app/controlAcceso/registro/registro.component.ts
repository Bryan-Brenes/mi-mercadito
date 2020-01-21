import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public fechaNacimiento: string;
  public email: string;
  public contrasenna: string;
  public telefono: string;

  public error: string;

  constructor(private loginService: LoginService, private sesionCliente: SesionClienteService, private router: Router) { }

  ngOnInit() {

  }

  public agregarComerciante() {
    if (this.nombre == undefined ||
      this.apellido == undefined ||
      this.fechaNacimiento == undefined ||
      this.email == undefined ||
      this.contrasenna == undefined ||
      this.telefono == undefined) {
      this.error = "No dejar campos vacíos";
      return;
    }
    var json = {
      email: this.email,
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      contrasena: this.contrasenna,
      telefono: this.telefono
    }

    // this.loginService.prueba(json).subscribe(data => {
    //   console.log(data)
    // });

    //console.log(json)
    this.loginService.agregarCliente(json).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      //console.log(data)
      if (dato.status == "listo") {
        //pasar pantalla
        this.sesionCliente.email = this.email;
        this.sesionCliente.nombre = this.nombre;
        this.sesionCliente.apellido = this.apellido;
        this.sesionCliente.telefono = this.telefono;
        this.sesionCliente.fechaNacimiento = this.fechaNacimiento;
        this.router.navigateByUrl('cliente');
      } else {
        this.error = "No se pudo agregar, intente más tarde"
      }
    })
  }

  public resetError() {
    this.error = undefined;
  }

}
