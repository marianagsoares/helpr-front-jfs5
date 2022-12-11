import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';

const routes: Routes = [
  {
    path: '', 
    component: CargoComponent,  // chama a rota cargo
    title: "Helpr | Cargos"
   },
   {
    path:'new',
    component: NewCargoComponent  // chama a rota novo cargo
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
