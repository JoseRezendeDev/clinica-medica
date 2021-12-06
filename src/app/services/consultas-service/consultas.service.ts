import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/classes/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/consultas.php";

  constructor(private http: HttpClient) { }

  getConsultas() : Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.baseURL);
  }

  cadastrarConsulta(consulta) : Observable<any>{
    let body = new HttpParams();
    body = body.set("idPaciente", consulta.nome);
    body = body.set("idMedico", consulta.nome);
    body = body.set("data", consulta.dataConsulta);
    return this.http.post(this.baseURL, body, {observe: "response"});
  }

  deletarConsulta(idConsulta) : Observable<any>{
    return this.http.delete(this.baseURL + "/" + idConsulta, {observe: "response"});
  }

  editarConsulta(consulta) : Observable<any>{
    let body = new HttpParams();
    body = body.set("idPaciente", consulta.nome);
    body = body.set("idMedico", consulta.nome);
    body = body.set("data", consulta.dataConsulta);
    return this.http.put(this.baseURL, body, {observe: "response"});
  }
}
