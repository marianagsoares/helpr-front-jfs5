import { Component, OnInit } from '@angular/core';
import {  EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuturoCliente } from 'src/app/models/futurocliente';
import { FuturoclienteService } from 'src/app/services/futurocliente.service';

@Component({
  selector: 'app-new-futuro-cliente',
  templateUrl: './new-futuro-cliente.component.html',
  styleUrls: ['./new-futuro-cliente.component.css']
})
export class NewFuturoClienteComponent {

  public dadosPessoaisForm: FormGroup;
  public contatosForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private futuroClienteService: FuturoclienteService,
    private router: Router
  ) { 

    this.dadosPessoaisForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required]
    });
    this.contatosForm = this.formBuilder.group({
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  isLinear = false;

  public create(): void {
    if(this.dadosPessoaisForm.valid && this.contatosForm.valid) {
      const dadosPessoaisForm: FuturoCliente = this.dadosPessoaisForm.value;
      const contatosForm: FuturoCliente = this.contatosForm.value;
      const formularioCompleto = {
        ...dadosPessoaisForm, 
        ...contatosForm
      }
      console.log(formularioCompleto)

      this.futuroClienteService.create(formularioCompleto).subscribe(() => {
        alert("Cliente cadastrado com sucesso!");
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }
}
