import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../classes/Medico';
import { EspecialidadesService } from '../services/especialidades-service/especialidades.service';
import { MedicosService } from '../services/medicos-service/medicos.service';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css']
})
export class CadastrarMedicoComponent implements OnInit {

  nome = new FormControl('');
  especialidade = new FormControl('');
  especialidades : any;
  medico : Medico = {
    nome: "",
    idEspecialidade: null
  };

  sucessoCadastrar: boolean = false;
  erroCadastrar: boolean = false;
  mensagemErro: string = '';

  constructor(private especialidadeService : EspecialidadesService, private medicoService : MedicosService, private router: Router) { }

  ngOnInit(): void {
    this.especialidadeService.getEspecialidades().subscribe(res => {
      this.especialidades = res;
    });
  }

  cadastrar(){
    this.medico.nome = this.nome.value;
    this.medico.idEspecialidade = this.especialidade.value;

    if (this.mensagemErro === '') {
      this.medico.id = null;
      this.medicoService.cadastrarMedico(this.medico)

      this.sucessoCadastrar = true;
      //let componente = this;
      setTimeout(function () {
        this.sucessoCadastrar = false;
        this.router.navigate(['/listarMedicos']);
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
