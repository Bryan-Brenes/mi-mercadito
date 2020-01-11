import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './controlAcceso/login/login.component';
import { RegistroComponent } from './controlAcceso/registro/registro.component';
import { RegistroComercianteComponent } from './controlAcceso/registro-comerciante/registro-comerciante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RegistroComercianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
