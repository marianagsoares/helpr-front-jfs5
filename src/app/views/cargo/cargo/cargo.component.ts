import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  displayedColumns: string[] = ['idCargo', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = [];  // interface

  constructor(private cargosService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

// INICIALIZAR OS DADOS DA TABELA
private initializeTable():void{
  this.cargosService.findAll().subscribe(cargos =>{
    this.dataSource = cargos;
  })
}

}