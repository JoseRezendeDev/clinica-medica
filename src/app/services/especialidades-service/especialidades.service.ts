import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/especialidades.php";

  constructor(private http: HttpClient) { }

  getEspecialidades() {
    console.log(this.http.get<any>(this.baseURL));
  }
}
