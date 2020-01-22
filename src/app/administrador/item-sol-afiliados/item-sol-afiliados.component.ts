import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-sol-afiliados',
  templateUrl: './item-sol-afiliados.component.html',
  styleUrls: ['./item-sol-afiliados.component.css']
})
export class ItemSolAfiliadosComponent implements OnInit {

  @Input() nombre: string;
  @Input() ruta: string ;
  @Input() idsolicitud: string;

  constructor( private adminServicio : AdminService  , private router:Router) { }


  ngOnInit() {

  }
  
  private aceptarSolicitud(){
    this.adminServicio.aceptarSolicitud(this.idsolicitud).subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.router.navigateByUrl('/administrador/listaSolAfiliados')
    })
  }


}



