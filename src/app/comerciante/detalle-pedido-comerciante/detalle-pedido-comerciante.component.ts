import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { ActivatedRoute } from '@angular/router';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';

@Component({
  selector: 'app-detalle-pedido-comerciante',
  templateUrl: './detalle-pedido-comerciante.component.html',
  styleUrls: ['./detalle-pedido-comerciante.component.css']
})
export class DetallePedidoComercianteComponent implements OnInit {

  //datos del cliente
  nombreComerciante: string;
  nombre: string;
  fechaNacimiento: string = "15-10-1989";
  telefono: string = "8745-1523";
  correo: string = "rodrigoZC2@gmail.com";
  ubicacion: string = "De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";

  //detalles del pedido
  producto: string;
  comerciante: string;
  cantidad: string;
  unidadMediad: string;
  estado: boolean;
  pedido: any;

  constructor(private comercianteServicio: ComercianteService, private router: ActivatedRoute, public sesionComerciante: SesionComercianteService) { }

  ngOnInit() {
    this.obtenerPedidos();
    this.nombreComerciante = this.sesionComerciante.nombre
  }

  private obtenerPedidos() {
    var id = this.router.snapshot.paramMap.get('id')
    console.log(id);
    this.comercianteServicio.verDetallesPedido(id).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data))
      console.log(dato);
      this.pedido = dato;
      this.nombre = this.pedido[0].nombrecliente + ' ' + this.pedido[0].apellidocliente;
      this.telefono = this.pedido[0].telefonocliente;
      this.ubicacion = this.pedido[0].ubicacioncliente;

    })
  }

}
