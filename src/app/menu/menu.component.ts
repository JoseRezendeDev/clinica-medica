import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Input() flagLogin : boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  listarPacientes() {
    console.log(this.loginService.estaLogado())
    if (this.loginService.estaLogado()) {
      this.router.navigate(['/listarPacientes']);
    } else {
      alert("Voce nao esta logado")
    }
  }

  cadastrarPaciente() {
    if (this.loginService.estaLogado()) {
      this.router.navigate(['/cadastrarPaciente']);
    } else {
      alert("Voce nao esta logado")
    }
  }

  listarMedicos() {
    if (this.loginService.estaLogado()) {
      this.router.navigate(['/listarMedicos']);
    } else {
      alert("Voce nao esta logado")
    }
  }

  cadastrarMedico() {
    if (this.loginService.estaLogado()) {
      this.router.navigate(['/cadastrarMedicos']);
    } else {
      alert("Voce nao esta logado")
    }
  }

  cadastrarConsulta() {
    if (this.loginService.estaLogado()) {
      this.router.navigate(['/cadastrarConsulta']);
    } else {
      alert("Voce nao esta logado")
    }
  }

  home() {
    this.router.navigate(['/home'])
  }

}
