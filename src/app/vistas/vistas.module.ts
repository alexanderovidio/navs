import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta/carta.component';
import { HomeComponent } from './home/home.component';
import { SalonesComponent } from './salones/salones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { VistasRoutingModule} from './vistas-routing.module';
import { ReservaComponent } from './reserva/reserva.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent,
    SalonesComponent,
    UbicacionComponent,
    ReservaComponent,
    ContactoComponent,
    IniciarsesionComponent
  ],
  exports: [
    HomeComponent,
    CartaComponent,
    SalonesComponent,
    UbicacionComponent,
    ReservaComponent,
    ContactoComponent,
    IniciarsesionComponent
  ],
  imports: [
    CommonModule, VistasRoutingModule
  ]
})
export class VistasModule { }
