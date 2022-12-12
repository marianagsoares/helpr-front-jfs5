import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Cargo } from 'src/app/models/cargo'

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formFuncionario: FormGroup;
  cargos: Cargo[] = []
  perfis: any = [
    {
        label: "Administrador", 
        value: "ADMIN"
    },
    {
      label: "Funcionário", 
      value: "FUNCIONARIO"
    }
  ]

  constructor(
    formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private cargoService : CargoService
  ) {
    this.formFuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      perfil: ["", [Validators.required]],
      idCargo: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargoService.findAll().subscribe((cargos) => {
      this.cargos = cargos;
    } )
  }

  public create(): void {
    if(this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response => {
        alert("Funcionário cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }
}
