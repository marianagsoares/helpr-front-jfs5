import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class FuncionariosModule { }