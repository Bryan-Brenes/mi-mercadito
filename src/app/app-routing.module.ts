
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
  { path: 'cliente/detalleCompra', component: DetalleCompraClienteComponent },
  { path: 'cliente/verDetallePuesto', component: VerDetallePuestoClienteComponent },
  { path: 'cliente/detalleCompra', component: DetalleCompraClienteComponent },
  { path: 'repartidor/pedidos', component: PedidosHacerRepartidorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
