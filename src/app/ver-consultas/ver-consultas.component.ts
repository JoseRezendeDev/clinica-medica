import { Component, OnInit } from '@angular/core';
import { Consulta } from '../classes/Consulta';
import { Medico } from '../classes/Medico';
import { Paciente } from '../classes/Paciente';
import { ConsultasService } from '../services/consultas-service/consultas.service';
import { MedicosService } from '../services/medicos-service/medicos.service';
import { PacientesService } from '../services/pacientes-service/pacientes.service';

@Component({
  selector: 'app-ver-consultas',
  templateUrl: './ver-consultas.component.html',
  styleUrls: ['./ver-consultas.component.css']
})
export class VerConsultasComponent implements OnInit {

  consultas: Consulta[];
  pacientes: Paciente[];
  medicos: Medico[];

  constructor(private pacientesService: PacientesService, private medicosService: MedicosService, private consultasService: ConsultasService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(res => {
      this.pacientes = res;
    });
    
    this.medicosService.getMedicos().subscribe(res => {
      this.medicos = res;
    });

    this.consultasService.getConsultas().subscribe(res => {
      console.log(res)

      this.consultas = res;
    });
  }

  cancelarConsulta(id) {
    console.log(id);

  }
}
