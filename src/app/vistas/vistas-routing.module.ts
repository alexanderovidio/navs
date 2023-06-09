import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { SalonesComponent } from './salones/salones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';

const rutas: Routes = [
  {
    path:"",
    children:[
      {path:"inicio",component:HomeComponent},
      {path:"carta",component:CartaComponent},
      {path:"salones",component:SalonesComponent},
      {path:"ubicacion",component:UbicacionComponent},
      {path:"reserva",component:ReservaComponent},
      {path:"contacto",component:ContactoComponent},
      {path:"iniciarsesion",component:IniciarsesionComponent},
      {path:"**",redirectTo:"inicio"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rutas)
  ]
})
export class VistasRoutingModule { }
