import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() eventoLogin = new EventEmitter<Boolean>();
  login = new FormControl('');
  senha = new FormControl('');

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  exibirHome(): void {
    this.loginService.fazerLogin(this.login.value, this.senha.value).subscribe(res => {
      if (res.body.token) {
        sessionStorage.setItem("token", res.body.token);
      }

      if (this.loginService.estaLogado()) {
        this.eventoLogin.emit(true);
        //this.router.navigate(['/home']);
      } else {
        alert("Login ou senha invalidos");
      }
    });
  }
}
