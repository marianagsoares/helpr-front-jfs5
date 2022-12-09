import { Component, OnInit } from '@angular/core';
import { FuturoCandidato } from 'src/app/models/futuro-candidato';
import { FuturoCandidatoService } from 'src/app/services/futuro-candidato.service';

@Component({
  selector: 'app-futuro-candidato',
  templateUrl: './futuro-candidato.component.html',
  styleUrls: ['./futuro-candidato.component.css']
})
export class FuturoCandidatoComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'nomeCompleto', 'email', 'descricaoDasHabilidades','setor', 'excluir'];
  dataSource: FuturoCandidato[] = [];

  constructor(private futurocandidatoservice: FuturoCandidatoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable():void{
    this.futurocandidatoservice.findAll().subscribe(FuturoCandidato =>{
      this.dataSource = FuturoCandidato;
    })
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futurocandidatoservice.delete(id).subscribe(() => {
        alert("Futuro Candidato excluido.");
        this.initializeTable();
      });
    }
  }
}


  

 


