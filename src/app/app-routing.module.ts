import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './controlAcceso/login/login.component';
import { RegistroComponent } from './controlAcceso/registro/registro.component';
import { RegistroComercianteComponent } from './controlAcceso/registro-comerciante/registro-comerciante.component';
import { NavbarClienteComponent } from './cliente/navbar-cliente/navbar-cliente.component';
import { NavbarCarritoClienteComponent } from './cliente/navbar-carrito-cliente/navbar-carrito-cliente.component';
import { PerfilClienteComponent } from './cliente/perfil-cliente/perfil-cliente.component';
import { CarritoClienteComponent } from './cliente/carrito-cliente/carrito-cliente.component';
import { VerPuestosClienteComponent } from './cliente/ver-puestos-cliente/ver-puestos-cliente.component';
import { BuscarProductosClienteComponent } from './cliente/buscar-productos-cliente/buscar-productos-cliente.component';
import { VerDetallePuestoClienteComponent } from './cliente/ver-detalle-puesto-cliente/ver-detalle-puesto-cliente.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registroComprador', component: RegistroComponent },
  { path: 'registroComerciante', component: RegistroComercianteComponent },
  { path: 'cliente', component: PerfilClienteComponent },
  { path: 'carrito', component: CarritoClienteComponent },
  { path: 'cliente/verPuesto', component: VerPuestosClienteComponent},
  { path: 'cliente/verDetallePuesto', component: VerDetallePuestoClienteComponent},
  { path: 'cliente/verProducto', component: BuscarProductosClienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
