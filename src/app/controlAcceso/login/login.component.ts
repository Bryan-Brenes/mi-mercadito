import { Component, OnInit, } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';
import { Router } from '@angular/router';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public contrasenna: string;

  constructor(private loginService: LoginService, private sesionCliente: SesionClienteService, private router: Router, private sesionComerciante: SesionComercianteService) { }

  ngOnInit() {
  }
 
  private validarContrasenna() {
    if (this.email != undefined && this.contrasenna != undefined) {
      this.loginService.getContrasenna(this.email).subscribe(data => {
        var dato = JSON.parse(JSON.stringify(data));
        console.log(dato)
        if (dato.rol == 'cliente') {

          this.loginService.obtenerCliente(this.email).subscribe(data => {
            var info = data[0];
            console.log(info)
            this.sesionCliente.email = info.id;
            this.sesionCliente.nombre = info.nombre;
            this.sesionCliente.apellido = info.apellido;
            this.sesionCliente.telefono = info.telefono;
            this.sesionCliente.fechaNacimiento = info.fechanacimiento;
            this.sesionCliente.foto = info.foto;
            this.router.navigateByUrl('cliente');
          })
        } else if (dato.rol == 'admin') {

        } else if (dato.rol == 'repartidor') {

        } else if (dato.rol == 'comerciante') {
          this.loginService.obtenerComerciante(this.email).subscribe(data => {
            var info = data[0];
            console.log(info)
            this.sesionComerciante.email = info.id;
            this.sesionComerciante.nombre = info.nombre;
            this.sesionComerciante.telefono = info.telefono;
            this.sesionComerciante.ubicacion = info.ubicacion;
            this.router.navigateByUrl('comerciante');
          })
        } else {
          console.log('no entra')
        }
      })
    }
  }

}
