import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/especialidades.php";

  constructor(private http: HttpClient) { }

  getEspecialidades() : Observable<any>{
    return this.http.get<Observable<any>>(this.baseURL);
  }
}
