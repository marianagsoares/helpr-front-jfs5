import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewFuturoClienteComponent } from '../../clientes/futurocliente/new-futuro-cliente/new-futuro-cliente.component';

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
  ) {

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
        alert("Bem-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewFuturoClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
