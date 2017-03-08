import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MasterURLService} from "./services/master-url.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    SuscripcionComponent,
    SugerenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURLService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
