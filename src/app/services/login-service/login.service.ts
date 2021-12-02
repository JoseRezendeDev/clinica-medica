import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/administradores.php";

  constructor(private http: HttpClient) { }

  cadastrarUsuario(login: string, senha: string): Observable<any> {
    let body = new HttpParams();
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

    if (sessionStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }
}
