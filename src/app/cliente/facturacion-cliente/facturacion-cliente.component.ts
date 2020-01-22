import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-facturacion-cliente',
  templateUrl: './facturacion-cliente.component.html',
  styleUrls: ['./facturacion-cliente.component.css']
})
export class FacturacionClienteComponent implements OnInit {

  public itemes: any;
  public subtotal: any;
  public cargoEnvio: any;
  public cargoServicio: any;
  public total: any;

  constructor(public carritoService: CarritoService, private sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.getItemes();
    this.calcularMontos();
    this.registrarPedido();
  }

  private registrarPedido() {
    var date = new Date();
    var transporte = '0';
    var ubicacion = "";
    if (this.carritoService.direccion != undefined) {
      transporte = '1';
      ubicacion = this.carritoService.direccion;
    }
    var json = {
      idCliente: this.sesionCliente.email,
      fecha: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1}`,
      monto: this.total,
      transporte: transporte,
      estadoPreparado: false,
      estadoEntregado: false,
      ubicacion: ubicacion
    }
    this.carritoService.agregarPedido(json).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      var id = dato.id;
      var productos = this.carritoService.productos;
      for (let i = 0; i < productos.length; i++) {

        var item = productos[i];
        var idP = item.idproducto;
        var nomP = item.nombre;
        var montoP = item.montokg;

        var json = {
          idPedido: id,
          idProducto: idP,
          cantidad: 1,
          monto: montoP
        }

        this.carritoService.agregarProductoPedido(json).subscribe(data => {
          var dato = JSON.parse(JSON.stringify(data));
        })

      }
    })
  }

  private getItemes() {
    this.itemes = this.carritoService.productos;
  }

  private calcularMontos() {
    this.subtotal = 0;
    this.total = 0;
    for (let i = 0; i < this.carritoService.productos.length; i++) {
      this.subtotal += this.carritoService.productos[i].montokg;
    }

    this.total += this.subtotal;
    if (this.carritoService.direccion != undefined) {
      this.cargoEnvio = this.subtotal * 0.04;
      this.total += this.cargoEnvio;
    }

    this.cargoServicio = this.subtotal * 0.04;
    this.total += this.cargoServicio;

  }

}
