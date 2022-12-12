import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  //metodo para buscar 
  public findAll(): Observable<Cargo[]>{
  return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
    catchError(error => {
      alert("Erro ao buscar cargos");
      console.error(error);
      return EMPTY;
    })
    );
  }
// metodo para criar um cliente 
  public create(cargo: Cargo): Observable<Cargo>{
   return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(  
    catchError(error =>{
      alert("Erro ao criar um novo cargo.");
      console.error(error);
      return EMPTY;
    })
    );
  }

  // deletar cliente
  public delete(idCargo: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        alert("Erro ao excluir cargo. Existe relação de dependência.");
        
        console.error(error);
        return EMPTY;
      })
    );
  }

}
