import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../../classes/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/medicos.php";

  constructor(private http: HttpClient) { }

  getMedicos() : Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseURL);
  }

  cadastrarMedico(medico) : Observable<any>{
    let body = new HttpParams();
    body = body.set("nome", medico.nome);
    body = body.set("idEspecialidade", medico.idEspecialidade);
    return this.http.post(this.baseURL + "?nome=" + medico.nome + "&idEspecialidade=" + medico.idEspecialidade, body, {observe: "response"});
  }

  deletarMedico(idMedico) : Observable<any>{
    return this.http.delete(this.baseURL + "?id=" + idMedico, {observe: "response"});
  }

  editarMedico(medico) : Observable<any>{
    let body = new HttpParams();
    body = body.set("nome", medico.nome);
    body = body.set("idEspecialidade", medico.idEspecialidade);
    return this.http.put(this.baseURL + "?nome=" + medico.nome + "&idEspecialidade=" + medico.idEspecialidade, body, {observe: "response"});
  }


}