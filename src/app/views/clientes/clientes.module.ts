import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FuturoclienteComponent } from './futurocliente/futurocliente.component';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';
import { NewFuturoClienteComponent } from './futurocliente/new-futuro-cliente/new-futuro-cliente.component';


@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent,
    EditClienteComponent,
    FuturoclienteComponent,
    FuturoCandidatoComponent,
    NewFuturoClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ClientesModule { }
