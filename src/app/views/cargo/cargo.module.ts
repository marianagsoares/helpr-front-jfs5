import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo/cargo.component';
import { ComponentsModule } from "../../components/components.module";
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CargoComponent,
        NewCargoComponent
    ],
    imports: [
        CommonModule,
        CargoRoutingModule,
        ComponentsModule,
        MaterialModule,
        ReactiveFormsModule //para usar no formulario
    ]
})
export class CargoModule { }
