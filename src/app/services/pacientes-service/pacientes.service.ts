import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/classes/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/pacientes.php";

  constructor(private http: HttpClient) { }

  getPacientes() : Observable<Paciente> {
    return this.http.get<Paciente>(this.baseURL);
  }

  cadastrarPaciente(paciente) : Observable<any>{
    let body = new HttpParams();
    body = body.set("nome", paciente.nome);
    body = body.set("dataNascimento", paciente.dataNascimento);
    return this.http.post(this.baseURL, body, {observe: "response"});
  }

  deletarPaciente(idPaciente) : Observable<any>{
    return this.http.delete(this.baseURL + "/" + idPaciente, {observe: "response"});
  }

  editarPaciente(paciente) : Observable<any>{
    let body = new HttpParams();
    body = body.set("nome", paciente.nome);
    body = body.set("dataNascimento", paciente.dataNascimento);
    return this.http.put(this.baseURL, body, {observe: "response"});
  }

}