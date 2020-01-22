import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-agregar-repartidor',
  templateUrl: './agregar-repartidor.component.html',
  styleUrls: ['./agregar-repartidor.component.css']
})
export class AgregarRepartidorComponent implements OnInit {

  constructor(private adminServicio: AdminService , public sesionCliente: SesionClienteService) { }

  pId:string;
  pNombre:string;
  pApellido:string; 
  pTelefono:string; 
  pFechanacimiento:any;
  pNumeroCuenta:string;

  ngOnInit() {
  }


  private agregarRepartidor(){
    var  json = {
      email:this.pId, 
      nombre:this.pNombre,
      apellido:this.pApellido,
      telefono: this.pTelefono ,
      fechaNacimiento : this.pFechanacimiento,
      numeroCuenta:this.pNumeroCuenta
    }
    console.log(json)
    this.adminServicio.agregarRepartidor(json).subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
    
    })
}  
}
