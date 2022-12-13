import { HttpClient } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCliente } from '../models/futuro-cliente';

@Injectable({
  providedIn: 'root'
})
export class FuturoclienteService {

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar
  ) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/clientes/futuros`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar futuros clientes", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<FuturoCliente> {
    return this.http.get<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao buscar futuro cliente", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(futuroCliente: FuturoCliente): Observable<FuturoCliente> {
    return this.http.post<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros/criar`, futuroCliente).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao criar futuro cliente", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<FuturoCliente> {
    return this.http.delete<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros/${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao deletar futuro cliente", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }
}
