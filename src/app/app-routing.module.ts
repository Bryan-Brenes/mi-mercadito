
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './controlAcceso/login/login.component';
import { RegistroComponent } from './controlAcceso/registro/registro.component';
import { RegistroComercianteComponent } from './controlAcceso/registro-comerciante/registro-comerciante.component';
import { NavbarClienteComponent } from './cliente/navbar-cliente/navbar-cliente.component';
import { NavbarCarritoClienteComponent } from './cliente/navbar-carrito-cliente/navbar-carrito-cliente.component';
import { PerfilClienteComponent } from './cliente/perfil-cliente/perfil-cliente.component';
import { CarritoClienteComponent } from './cliente/carrito-cliente/carrito-cliente.component';
import { PagoClienteComponent } from './cliente/pago-cliente/pago-cliente.component';
import { FacturacionClienteComponent } from './cliente/facturacion-cliente/facturacion-cliente.component';
import { VerPuestosClienteComponent } from './cliente/ver-puestos-cliente/ver-puestos-cliente.component';
import { BuscarProductosClienteComponent } from './cliente/buscar-productos-cliente/buscar-productos-cliente.component';
import { MisPedidosClienteComponent } from './cliente/mis-pedidos-cliente/mis-pedidos-cliente.component';
import { PerfilComercianteComponent } from "./comerciante/perfil-comerciante/perfil-comerciante.component";
import { VerDetallePuestoClienteComponent } from './cliente/ver-detalle-puesto-cliente/ver-detalle-puesto-cliente.component';
import { DetalleCompraClienteComponent } from './cliente/detalle-compra-cliente/detalle-compra-cliente.component';
import { PedidosHacerRepartidorComponent } from './repartidor/pedidos-hacer-repartidor/pedidos-hacer-repartidor.component';
import { InventarioComercianteComponent } from "./comerciante/inventario-comerciante/inventario-comerciante.component";
import { DescripcionProductoComercianteComponent } from "./comerciante/descripcion-producto-comerciante/descripcion-producto-comerciante.component";
import { AgregarProductoComercianteComponent } from "./comerciante/agregar-producto-comerciante/agregar-producto-comerciante.component";
import { MiPuestoComercianteComponent } from "./comerciante/mi-puesto-comerciante/mi-puesto-comerciante.component";
import { AgregarProductoMiPuestoComercianteComponent } from "./comerciante/agregar-producto-mi-puesto-comerciante/agregar-producto-mi-puesto-comerciante.component";
import { DetallesPedidosRepartidorComponent } from './repartidor/detalles-pedidos-repartidor/detalles-pedidos-repartidor.component';
import { MisEncargosComponent } from "./comerciante/mis-encargos/mis-encargos.component";
import { DetallePedidoComercianteComponent } from "./comerciante/detalle-pedido-comerciante/detalle-pedido-comerciante.component";
import { ListarepartidoresComponent } from './administrador/listarepartidores/listarepartidores.component';
import { AgregarRepartidorComponent } from './administrador/agregar-repartidor/agregar-repartidor.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registroComprador', component: RegistroComponent },
  { path: 'registroComerciante', component: RegistroComercianteComponent },
  { path: 'cliente', component: PerfilClienteComponent },
  { path: 'cliente/carrito', component: CarritoClienteComponent },
  { path: 'cliente/metodoPago', component: PagoClienteComponent },
  { path: 'cliente/facturacion', component: FacturacionClienteComponent },
  { path: 'cliente/misPedidos', component: MisPedidosClienteComponent },
  { path: 'cliente/verPuesto', component: VerPuestosClienteComponent },
  { path: 'cliente/buscarProducto', component: BuscarProductosClienteComponent },
  { path: 'comerciante', component: PerfilComercianteComponent },
  { path: 'cliente/verDetallePuesto/:id', component: VerDetallePuestoClienteComponent },
  { path: 'comerciante/verInventario', component: InventarioComercianteComponent },
  { path: 'comerciante/verDescripcionProducto/:id', component: DescripcionProductoComercianteComponent },
  { path: 'comerciante/agregarProducto', component: AgregarProductoComercianteComponent },
  { path: 'cliente/detalleCompra', component: DetalleCompraClienteComponent },
  { path: 'comerciante/miPuesto', component: MiPuestoComercianteComponent },
  { path: 'comerciante/agregarProductoMiPuesto', component: AgregarProductoMiPuestoComercianteComponent },
  { path: 'repartidor/pedidos', component: PedidosHacerRepartidorComponent },
  { path: 'repartidor/detallesPedido/:id', component: DetallesPedidosRepartidorComponent },
  { path: 'comerciante/misEncargos', component: MisEncargosComponent },
  { path: 'comerciante/detallesPedido/:id', component: DetallePedidoComercianteComponent },
  { path: 'administrador/listaRepartidores', component: ListarepartidoresComponent },
  { path: 'administrador/agregarRepartidor', component: AgregarRepartidorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
