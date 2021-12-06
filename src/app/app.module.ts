import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import { LoginInterceptor } from './login.interceptor';
import { CadastrarMedicoComponent } from './cadastrar-medico/cadastrar-medico.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { VerConsultasComponent } from './ver-consultas/ver-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    MenuComponent,
    ListarPacientesComponent,
    CadastrarPacienteComponent,
    HomeComponent,
    CadastrarMedicoComponent,
    ListarMedicosComponent,
    VerConsultasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoginInterceptor,
        multi: true
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
