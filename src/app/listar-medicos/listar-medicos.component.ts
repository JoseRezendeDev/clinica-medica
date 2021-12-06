import { Component, OnInit } from '@angular/core';
import { Medico } from '../classes/Medico';
import { LoginService } from '../services/login-service/login.service';
import { MedicosService } from '../services/medicos-service/medicos.service';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit {

  medicos : Medico[];

  constructor(private medicosService : MedicosService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.medicosService.getMedicos().subscribe(res => {
      this.medicos = res;
      console.log(this.medicos)
    });
  }

  deletarMedico(idMedico) {
    if (this.loginService.estaLogado()) {
      this.medicosService.deletarMedico(idMedico).subscribe(res => {
        if(res.ok == true) {
          alert("Medico removido com sucesso");
        } else {
          alert("A remocao não foi realizada!");
        }
      })
    }
  }

}
