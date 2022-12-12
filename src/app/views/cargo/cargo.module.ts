import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo/cargo.component';
import { ComponentsModule } from "../../components/components.module";
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';


@NgModule({
    declarations: [
        CargoComponent,
        NewCargoComponent,
        EditCargoComponent
    ],
    imports: [
        CommonModule,
        CargoRoutingModule,
        ComponentsModule,
        MaterialModule,
        ReactiveFormsModule, //para usar no formulario
        FormsModule
    ]
})
export class CargoModule { }
