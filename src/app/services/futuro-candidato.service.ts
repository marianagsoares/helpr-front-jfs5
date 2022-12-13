import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCandidato } from '../models/futuro-candidato';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(private http:HttpClient,
    private matSnackBar: MatSnackBar) { }


  public findAll():Observable<FuturoCandidato[]>{
     return  this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/candidatos`).pipe(
      catchError(error =>{
        this.matSnackBar.open("Erro ao buscar futuros candidatos", "fechar")
        console.error(error);
        return EMPTY;
      })
      );
    }
    
  public delete(id: number): Observable<FuturoCandidato> {
    return this.http.delete<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos/${id}`).pipe(
      catchError(error => {
        this.matSnackBar.open("Erro ao deletar futuro candidato", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
   
  }  
  
    }
