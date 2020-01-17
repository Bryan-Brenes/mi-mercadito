import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ItemComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
