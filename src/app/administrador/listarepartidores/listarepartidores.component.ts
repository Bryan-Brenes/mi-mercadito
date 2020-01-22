import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-listarepartidores',
  templateUrl: './listarepartidores.component.html',
  styleUrls: ['./listarepartidores.component.css']
})
export class ListarepartidoresComponent implements OnInit {


  constructor(private adminServicio : AdminService ) { }

  nombre:string;
  repartidores:any;

  ngOnInit() {
    this.mostrarRepartidores();
  }

  private mostrarRepartidores(){
    this.adminServicio.mostrarRepartidor().subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.repartidores=dato;

    })
  }

}
