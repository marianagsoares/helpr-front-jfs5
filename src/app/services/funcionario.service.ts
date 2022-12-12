import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private http: HttpClient,
    ) { }

  public findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error => {
        alert("Funcionários não encontrados");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios${id}`).pipe(
      catchError(error => {
        alert("Funcionário não encontrado");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, funcionario).pipe(
      catchError(error => {
        alert("Não foi possível criar funcionário");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios${funcionario.idFuncionario}`, funcionario).pipe(
      catchError(error => {
        alert("Erro ao editar funcionário");
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios${id}`).pipe(
      catchError(error => {
        alert("Não foi possível deletar o funcionário");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
