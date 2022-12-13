import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private matSnackBar: MatSnackBar
    ) { }

  public findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/chamados`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar chamados", "fechar");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Chamado> {
    return this.http.get<Chamado>(`${API_CONFIG.baseUrl}/chamados/${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar dados chamado", "fechar");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(chamado: Chamado): Observable<Chamado> {
    const data = {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      idCliente: chamado.cliente.id
    }
    return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/chamados`, data).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao criar chamado", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(chamado: Chamado): Observable<Chamado> {
    const data = {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      status: chamado.status,
      idCliente: chamado.cliente.id,
      idFuncionario: chamado.funcionario.id
    }
    return this.http.put<Chamado>(`${API_CONFIG.baseUrl}/chamados/${chamado.idChamado}`, data).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao editar chamado", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }
}
