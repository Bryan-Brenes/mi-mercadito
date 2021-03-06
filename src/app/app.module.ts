import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { LoginService } from './servicios/login.service';
import { ConfigService } from './servicios/config.service';
import { RepartidorService } from './servicios/repartidor.service';
import { SesionClienteService } from './servicios/sesion-cliente.service';
import { ClienteService } from './servicios/cliente.service';
import { CarritoService } from './servicios/carrito.service'
import { SesionComercianteService } from './servicios/sesion-comerciante.service'
import { AdminService } from './servicios/admin.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './controlAcceso/login/login.component';
import { RegistroComponent } from './controlAcceso/registro/registro.component';
import { RegistroComercianteComponent } from './controlAcceso/registro-comerciante/registro-comerciante.component';
import { NavbarClienteComponent } from './cliente/navbar-cliente/navbar-cliente.component';
import { NavbarCarritoClienteComponent } from './cliente/navbar-carrito-cliente/navbar-carrito-cliente.component';
import { PerfilClienteComponent } from './cliente/perfil-cliente/perfil-cliente.component';
import { CarritoClienteComponent } from './cliente/carrito-cliente/carrito-cliente.component';
import { ItemCarritoComponent } from './cliente/item-carrito/item-carrito.component';
import { VerPuestosClienteComponent } from './cliente/ver-puestos-cliente/ver-puestos-cliente.component';
import { ItemCuadriculaComponent } from './cliente/item-cuadricula/item-cuadricula.component';
import { BuscarProductosClienteComponent } from './cliente/buscar-productos-cliente/buscar-productos-cliente.component';
import { NavbarComercianteComponent } from './comerciante/navbar-comerciante/navbar-comerciante.component';
import { PagoClienteComponent } from './cliente/pago-cliente/pago-cliente.component';
import { FacturacionClienteComponent } from './cliente/facturacion-cliente/facturacion-cliente.component';
import { ItemFacturaClienteComponent } from './cliente/item-factura-cliente/item-factura-cliente.component';
import { PerfilComercianteComponent } from './comerciante/perfil-comerciante/perfil-comerciante.component';
import { MisPedidosClienteComponent } from './cliente/mis-pedidos-cliente/mis-pedidos-cliente.component';
import { ItemPedidosComponent } from './cliente/item-pedidos/item-pedidos.component';
import { VerDetallePuestoClienteComponent } from './cliente/ver-detalle-puesto-cliente/ver-detalle-puesto-cliente.component';
import { ItemComentarioComponent } from './comerciante/item-comentario/item-comentario.component';
import { InventarioComercianteComponent } from './comerciante/inventario-comerciante/inventario-comerciante.component';
import { DetalleCompraClienteComponent } from './cliente/detalle-compra-cliente/detalle-compra-cliente.component';
import { NavbarAdministradorComponent } from './administrador/navbar-administrador/navbar-administrador.component';
import { PedidosHacerRepartidorComponent } from './repartidor/pedidos-hacer-repartidor/pedidos-hacer-repartidor.component';
import { ItemPedidoRepartidorComponent } from './repartidor/item-pedido-repartidor/item-pedido-repartidor.component';
import { ItemProductosComponent } from './comerciante/item-productos/item-productos.component';
import { DescripcionProductoComercianteComponent } from './comerciante/descripcion-producto-comerciante/descripcion-producto-comerciante.component';
import { AgregarProductoComercianteComponent } from './comerciante/agregar-producto-comerciante/agregar-producto-comerciante.component';
import { MiPuestoComercianteComponent } from './comerciante/mi-puesto-comerciante/mi-puesto-comerciante.component';
import { ItemProductoComponent } from './comerciante/item-producto/item-producto.component';
import { AgregarProductoMiPuestoComercianteComponent } from './comerciante/agregar-producto-mi-puesto-comerciante/agregar-producto-mi-puesto-comerciante.component';
import { DetallesPedidosRepartidorComponent } from './repartidor/detalles-pedidos-repartidor/detalles-pedidos-repartidor.component';
import { NavBarRepartidorComponent } from './repartidor/nav-bar-repartidor/nav-bar-repartidor.component';
import { MisEncargosComponent } from './comerciante/mis-encargos/mis-encargos.component';
import { ItemProductoRepartidorComponent } from './repartidor/item-producto-repartidor/item-producto-repartidor.component';
import { ItemPedidoComercianteComponent } from './comerciante/item-pedido-comerciante/item-pedido-comerciante.component';
import { DetallePedidoComercianteComponent } from './comerciante/detalle-pedido-comerciante/detalle-pedido-comerciante.component';
import { ItemProductoComercianteComponent } from './comerciante/item-producto-comerciante/item-producto-comerciante.component';

import { ListarepartidoresComponent } from './administrador/listarepartidores/listarepartidores.component';
import { ItemRepartidoresComponent } from './administrador/item-repartidores/item-repartidores.component';
import { ActualizarRepartidorComponent } from './administrador/actualizar-repartidor/actualizar-repartidor.component';
import { AgregarRepartidorComponent } from './administrador/agregar-repartidor/agregar-repartidor.component';
import { ItemSolAfiliadosComponent } from './administrador/item-sol-afiliados/item-sol-afiliados.component';
import { ListaSolAfiliadosComponent } from './administrador/lista-sol-afiliados/lista-sol-afiliados.component';
import { PerfilAfiliadoComponent } from './administrador/perfil-afiliado/perfil-afiliado.component';
import { RecordatoriosComponent } from './administrador/recordatorios/recordatorios.component';
import { MensajeErrorComponent } from './mensaje-error/mensaje-error.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RegistroComercianteComponent,
    NavbarClienteComponent,
    PerfilClienteComponent,
    NavbarCarritoClienteComponent,
    CarritoClienteComponent,
    ItemCarritoComponent,
    NavbarComercianteComponent,
    PagoClienteComponent,
    FacturacionClienteComponent,
    ItemFacturaClienteComponent,
    VerPuestosClienteComponent,
    ItemCuadriculaComponent,
    BuscarProductosClienteComponent,
    PerfilComercianteComponent,
    MisPedidosClienteComponent,
    ItemPedidosComponent,
    VerDetallePuestoClienteComponent,
    ItemComentarioComponent,
    DetalleCompraClienteComponent,
    NavbarAdministradorComponent,
    InventarioComercianteComponent,
    DetalleCompraClienteComponent,
    ItemPedidoRepartidorComponent,
    PedidosHacerRepartidorComponent,
    ItemProductosComponent,
    AgregarProductoComercianteComponent,
    DescripcionProductoComercianteComponent,
    MiPuestoComercianteComponent,
    ItemProductoComponent,
    AgregarProductoMiPuestoComercianteComponent,
    DetallesPedidosRepartidorComponent,
    NavBarRepartidorComponent,
    ItemProductoRepartidorComponent,
    MisEncargosComponent,
    ItemPedidoComercianteComponent,
    DetallePedidoComercianteComponent,
    ItemProductoComercianteComponent,
    DetalleCompraClienteComponent,
    NavbarAdministradorComponent,
    ListarepartidoresComponent,
    ItemRepartidoresComponent,

    ActualizarRepartidorComponent ,
    AgregarRepartidorComponent ,
    ItemSolAfiliadosComponent,
    ListaSolAfiliadosComponent,
    PerfilAfiliadoComponent ,
    RecordatoriosComponent,
    MensajeErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    SesionClienteService,
    ConfigService,
    SesionClienteService,
    ClienteService,
    CarritoService,
    SesionComercianteService,
    AdminService ,
    RepartidorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
