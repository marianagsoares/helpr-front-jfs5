import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FotoFuncionarioPipe } from 'src/app/pipe/foto-funcionario.pipe';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';


@NgModule({
  declarations: [
  FuncionariosComponent,
  FotoFuncionarioPipe,
  NewFuncionarioComponent

  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class FuncionariosModule { }
