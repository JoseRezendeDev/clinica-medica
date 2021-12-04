import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EspecialidadesService } from '../services/especialidades-service/especialidades.service';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css']
})
export class CadastrarMedicoComponent implements OnInit {

  nome = new FormControl('');
  especialidade = new FormControl('');
  especialidades : any;

  constructor(private especialidadeService : EspecialidadesService) { }

  ngOnInit(): void {
    this.especialidadeService.getEspecialidades();
  }

  cadastrar(){
  
  }
}
