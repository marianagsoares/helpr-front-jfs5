import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['foto','id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(
    private funcionarioService : FuncionarioService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    });
  }

  public delete(idFuncionario: number): void {
    console.log(idFuncionario)
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(idFuncionario).subscribe(() => {
        this.matSnackBar.open("Funcionário excluído com sucesso", "fechar")
        this.initializeTable();
      });
    }
  }

}
