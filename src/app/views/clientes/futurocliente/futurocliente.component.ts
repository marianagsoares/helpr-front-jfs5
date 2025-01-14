import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuturoclienteService } from 'src/app/services/futurocliente.service';

@Component({
  selector: 'app-futurocliente',
  templateUrl: './futurocliente.component.html',
  styleUrls: ['./futurocliente.component.css']
})
export class FuturoclienteComponent implements OnInit {

  dataSource: FuturoCliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'excluir'];

  constructor( 
    private futuroclienteService : FuturoclienteService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroclienteService.findAll().subscribe(futurosClientes => {
      this.dataSource = futurosClientes;
    });
  }

  public delete(idFuturoCliente: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futuroclienteService.delete(idFuturoCliente).subscribe(() => {
        this.matSnackBar.open("Futuro cliente excluído", "fechar")
        this.initializeTable();
      });
    }
  }

}
