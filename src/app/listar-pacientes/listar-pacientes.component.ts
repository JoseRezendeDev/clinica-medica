import { Component, OnInit } from '@angular/core';
import { Paciente } from '../classes/Paciente';
import { LoginService } from '../services/login-service/login.service';
import { PacientesService } from '../services/pacientes-service/pacientes.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {

  pacientes : Paciente[];

  constructor(private pacientesService : PacientesService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(res => {
      console.log(res)
      this.pacientes = res;
    });
  }

  atualizarPaciente(id) {
    if (this.loginService.estaLogado()) {
      const paciente = this.pacientes.find(paciente => paciente.id === id)
      this.pacientesService.atualizarPaciente(paciente).subscribe(res => {
        console.log(res);
        if(res.ok == true) {
          alert("Paciente atualizado com sucesso");
        } else {
          alert("A atualização não foi realizada!");
        }
      })
    }
  }

  deletarPaciente(id) {
    if (this.loginService.estaLogado()) {
      this.pacientesService.deletarPaciente(id).subscribe(res => {
        console.log(res);
        if(res.ok == true) {
          alert("Paciente removido com sucesso");
        } else {
          alert("A remoção não foi realizada!");
        }
      })
    }
  }
}
