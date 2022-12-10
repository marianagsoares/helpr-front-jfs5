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
    component: ClientesComponent,
    title: "Helpr | Clientes"
  },
  {
    path: 'new',
    component: NewClienteComponent,
    title: "Helpr | Adicionar Cliente"
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent,
    title: "Helpr | Editar Cliente"
  },
  {
    path: 'futuros',
    component: FuturoclienteComponent,
    title: "Helpr | Futuros Clientes"
  },
  {
    path:'candidatos',
    component: FuturoCandidatoComponent,
    title: "Helpr | Futuros Candidatos"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
