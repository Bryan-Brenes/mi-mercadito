import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-buscar-productos-cliente',
  templateUrl: './buscar-productos-cliente.component.html',
  styleUrls: ['./buscar-productos-cliente.component.css']
})
export class BuscarProductosClienteComponent implements OnInit {

  nombre: string;
  productos: any;

  constructor(private clienteService: ClienteService, private sesionCliente: SesionClienteService, private carritoService: CarritoService) { }

  ngOnInit() {
    this.obtenerProductos();
    this.nombre = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`
  }


  private obtenerProductos(): void {
    this.clienteService.obtenerProductos().subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.productos = dato;
    })
  }



}
