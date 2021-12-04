import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarMedicoComponent } from './cadastrar-medico/cadastrar-medico.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import { HomeComponent } from './home/home.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listarPacientes',
    component: ListarPacientesComponent
  },
  {
    path: 'cadastrarPaciente',
    component: CadastrarPacienteComponent
  },
  {
    path: 'listarMedicos',
    component: ListarMedicosComponent
  },
  {
    path: 'cadastrarMedicos',
    component: CadastrarMedicoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
