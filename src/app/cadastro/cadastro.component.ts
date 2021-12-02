import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  login = new FormControl('');
  senha = new FormControl('');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void {
    this.loginService.cadastrarUsuario(this.login.value, this.senha.value).subscribe(res => {
      if (res.ok == true) {
        alert("Usuario cadastrado com sucesso")
      } else {
        alert("Falha no cadastro");
      }
    })
  }
}
