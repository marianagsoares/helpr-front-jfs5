import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargo: FormGroup;
 
  constructor(
    formBuilder: FormBuilder,
    private cargoService: CargoService,
    private router: Router,
    private matSnackBar: MatSnackBar   
  ){
    this.formCargo = formBuilder.group({
      nome:["",[ Validators.required]],
      descricao:["", [Validators.required]],
      salario:["", [Validators.required]]

    })
   }

  ngOnInit(): void {
  }

  public create():void{
    if(this.formCargo.valid){
      const cargo: Cargo = this.formCargo.value;
      this.cargoService.create(cargo).subscribe(response =>{
        this.matSnackBar.open("Cargo cadastrado com sucesso", "fechar")
        this.router.navigate(["/cargos"]);
      })
    }
    else{
      this.matSnackBar.open("Dados inválidos", "fechar")
    }
  }
}


