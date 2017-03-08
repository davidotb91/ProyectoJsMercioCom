import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ClienteComponent} from "./cliente/cliente.component";
import {SugerenciaComponent} from "./sugerencia/sugerencia.component";
import {SuscripcionComponent} from "./suscripcion/suscripcion.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/:idCliente/sugerencia', component: SugerenciaComponent},
  {path: 'cliente/:idCliente/suscripcion', component: SuscripcionComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
