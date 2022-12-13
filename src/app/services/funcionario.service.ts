import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar
    ) { }

  public findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar funcionários", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar funcionário", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, funcionario).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao criar funcionário", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao deletar funcionário", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }
}
