import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../classes/Paciente';
import { PacientesService } from '../services/pacientes-service/pacientes.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  paciente: Paciente = {
    nome: "",
    dataNascimento: new Date("01/01/2000"),
  }

  nome = new FormControl('');
  dataNascimento = new FormControl('');
  
  sucessoCadastrar: boolean = false;
  erroCadastrar: boolean = false;
  mensagemErro: string = '';

  baseURL = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/pacientes.php";

  constructor(private http: HttpClient, private router: Router, private pacientesService: PacientesService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.paciente.nome = this.nome.value;
    this.paciente.dataNascimento = this.dataNascimento.value;

    if (this.mensagemErro === '') {
      this.paciente.id = null;
      this.pacientesService.cadastrarPaciente(this.paciente).subscribe(res => {
        console.log(res);
        
      });

      this.sucessoCadastrar = true;
      let componente = this;
      setTimeout(function () {
        componente.sucessoCadastrar = false;
        componente.router.navigate(['/listarPacientes']);
      }, 2000);
    } else {
      this.erroCadastrar = true;
      let componente = this;
      setTimeout(function () {
        componente.erroCadastrar = false;
        componente.mensagemErro = '';
      }, 2000);
    }
  }
}
