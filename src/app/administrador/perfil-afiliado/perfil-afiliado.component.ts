import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';
import { ActivatedRoute } from '@angular/router';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';


@Component({
  selector: 'app-perfil-afiliado',
  templateUrl: './perfil-afiliado.component.html',
  styleUrls: ['./perfil-afiliado.component.css']
})
export class PerfilAfiliadoComponent implements OnInit {

  nombre: string ;
  cedula: string ;
  fechaNacimiento: string ;
  telefono: string ;
  correo: string ;
  ubicacion: string ;

  constructor(private adminServicio:AdminService , private router: ActivatedRoute , public sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.obtenerPerfilSolicitud();
  }

  private obtenerPerfilSolicitud(){
    var id=this.router.snapshot.paramMap.get('id')
    console.log(id);
    this.adminServicio.verPerfilSolicitudes(id).subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato[0].ubicacion);
      this.nombre= dato[0].nombre;
      this.telefono= dato[0].telefono;
      this.correo= dato[0].id;
      this.ubicacion= dato[0].ubicacion;
    })
  }

  

}
