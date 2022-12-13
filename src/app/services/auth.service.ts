import { API_CONFIG } from './../config/api.config';
import { Token } from './../models/token';
import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar
    ) { }

  public authenticate(credenciais: Credenciais): Observable<Token> {
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken);
      }),
      catchError(error => {
        this.matSnackBar.open("Não foi possível efetuar o login", "fechar")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public isAuthenticate(): boolean {
    let flag: boolean = false;
    const token = localStorage.getItem("token");
    if(token) {
      flag = !this.jwt.isTokenExpired(token);
    }
    return flag;
  }
}
