import { Component, OnInit } from '@angular/core';
import { RepartidorService } from 'src/app/servicios/repartidor.service';
import { ActivatedRoute } from '@angular/router';
import { SesionClienteService } from 'src/app/servicios/sesion-cliente.service';

@Component({
  selector: 'app-detalles-pedidos-repartidor',
  templateUrl: './detalles-pedidos-repartidor.component.html',
  styleUrls: ['./detalles-pedidos-repartidor.component.css']
})
export class DetallesPedidosRepartidorComponent implements OnInit {

  //datos del cliente
  nombreUsuario: string = "Rodrigo Zuñiga";
  nombre: string ;
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
  pedido:any;

  constructor( private repartidorServicio: RepartidorService , private router: ActivatedRoute , public sesionCliente: SesionClienteService) { }

  ngOnInit() {
    this.obtenerPedidos();
    this.nombreUsuario = `${this.sesionCliente.nombre} ${this.sesionCliente.apellido}`
  }

  private obtenerPedidos(){
    var id=this.router.snapshot.paramMap.get('id')
    console.log(id);
    this.repartidorServicio.verDetallesPedido(id).subscribe(data =>{
      var dato = JSON.parse(JSON.stringify(data))
      console.log(typeof(dato[0].estadoproducto));
      this.pedido=dato;
      this.nombre = this.pedido[0].nombrecliente  +' ' + this.pedido[0].apellidocliente   ;
      this.telefono = this.pedido[0].telefonocliente ;
      this.ubicacion = this.pedido[0].ubicacioncliente ;
      // for(let i = 0; i < this.pedido.lengh; i++){
      //   this.pedido[i]
      //   this.nombre = this.pedido[i].nombreCliente ;
      //   this.fechaNacimiento = this.pedido[i].telefonoCliente ;
      //   this.telefono = this.pedido[i].telefonoCliente ;
      //   this.correo= "rodrigoZC2@gmail.com";
      //   this.ubicacion = this.pedido[i].ubicacionCliente ;
      // }
    })
  }
}
