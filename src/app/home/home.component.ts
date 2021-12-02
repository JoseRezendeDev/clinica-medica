import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flagLogin : boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.estaLogado()) {
      this.flagLogin = true;
    }
  }

  eventoLogin($bool) {
    this.flagLogin = $bool;
    window.location.reload();
  }

}
