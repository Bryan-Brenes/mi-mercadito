import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './controlAcceso/login/login.component';
import { RegistroComponent } from './controlAcceso/registro/registro.component';
import { RegistroComercianteComponent } from './controlAcceso/registro-comerciante/registro-comerciante.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registroComprador', component: RegistroComponent },
  { path: 'registroComerciante', component: RegistroComercianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
