import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/";

  constructor(private http: HttpClient) { }

  cadastrarUsuario(nome: string, login: string, senha: string): Observable<any> {
    let body = new HttpParams();
    body = body.set("nome", nome);
    body = body.set("login", login);
    body = body.set("senha", senha);

    return this.http.put<any>(this.baseURL, body, { observe: "response" });
  }

  fazerLogin(login: string, senha: string): Observable<any> {
    let body = new HttpParams();
    body = body.set("login", login);
    body = body.set("senha", senha);

    return this.http.post<any>(this.baseURL, body, { observe: "response" });
  };

  estaLogado(): boolean {
    console.log(sessionStorage);

    if (sessionStorage.getItem("token") != null && sessionStorage.getItem("expiry") != null) {
      if (parseInt(sessionStorage.getItem("expiry") || "") > Date.now()) {
        return true;
      }
    }
    return false;
  }
}
