import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FuturoclienteComponent } from './futurocliente/futurocliente.component';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'new',
    component: NewClienteComponent
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent
  },
  {
    path: 'futuros',
    component: FuturoclienteComponent
  },
  {
    path:'candidatos',
    component: FuturoCandidatoComponent   // Futuro-Candidato
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
