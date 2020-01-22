import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-lista-sol-afiliados',
  templateUrl: './lista-sol-afiliados.component.html',
  styleUrls: ['./lista-sol-afiliados.component.css']
})
export class ListaSolAfiliadosComponent implements OnInit {

  constructor(private adminServicio: AdminService, public sesionCliente: SesionClienteService) { }

  solicitudes : any;
  nombre:string;

  ngOnInit() {
    this.obtenerSolicitudesPendientes();
  }

  obtenerSolicitudesPendientes(){
    this.adminServicio.obtenerSolicitudesPendientes().subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.solicitudes=dato;
    })
  }

}
