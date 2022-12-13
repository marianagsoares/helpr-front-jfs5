import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient,
    private matSnackBar: MatSnackBar) { }

  //metodo para buscar cargo
  public findAll(): Observable<Cargo[]>{
  return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
    catchError(error => {
      this.matSnackBar.open("Erro ao buscar cargos", "fechar")
      console.error(error);
      return EMPTY;
    })
    );
  }
// metodo para criar um cargo
  public create(cargo: Cargo): Observable<Cargo>{
   return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(  
    catchError(error =>{
      this.matSnackBar.open("Erro ao criar novo cargo", "fechar")
      console.error(error);
      return EMPTY;
    })
    );
  }

  // buscar pelo id
  public findById(idCargo: string): Observable<Cargo>{
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error =>{
        this.matSnackBar.open("Erro ao buscar dados do cargo", "fechar")
        console.error(error);
        return EMPTY;
      })
    )
  }

  // deletar cargo
  public delete(idCargo: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao deletar Cargo", "fechar");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(cargo: Cargo): Observable<Cargo> {
      return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/cargos/${cargo.idCargo}`, cargo).pipe(
        catchError(error => {
          this.matSnackBar.open("Erro ao editar cargo", "fechar");
          console.error(error);
          return EMPTY;
        })
      );
    }

  }


