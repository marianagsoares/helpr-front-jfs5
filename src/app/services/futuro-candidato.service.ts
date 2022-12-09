import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCandidato } from '../models/futuro-candidato';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(private http:HttpClient) { }


  public findAll():Observable<FuturoCandidato[]>{
     return  this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/candidatos`).pipe(
      catchError(error =>{
        alert("erro ao buscar dados do futuro candidato")
        console.error(error);
        return EMPTY;
      })
      );
    }
    
  public delete(id: number): Observable<FuturoCandidato> {
    return this.http.delete<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos/${id}`).pipe(
      catchError(error => {
        alert("Não foi possível deletar o futuro candidato");
        console.error(error);
        return EMPTY;
      })
    );
   
  }  
  
    }
