import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewFuturoClienteComponent } from '../../clientes/futurocliente/new-futuro-cliente/new-futuro-cliente.component';
import { NgwWowService } from 'ngx-wow';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private wowService: NgwWowService,
    private matSnackBar: MatSnackBar
  ) {

    this.wowService.init();

    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  
  public signIn(): void {
    if(this.formLogin.valid) {
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response => {
        this.matSnackBar.open("Bem vindo ao Helpr!", "fechar")
        this.router.navigate(["/home"]);
      });
    }
    else {
      this.matSnackBar.open("Dados inválidos", "fechar")
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewFuturoClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
