import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo/cargo.component';
import { ComponentsModule } from "../../components/components.module";
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
    declarations: [
        CargoComponent
    ],
    imports: [
        CommonModule,
        CargoRoutingModule,
        ComponentsModule,
        MaterialModule
    ]
})
export class CargoModule { }
