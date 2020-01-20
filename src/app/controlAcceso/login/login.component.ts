import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public contrasenna: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  private validarContrasenna() {
    if (this.email != undefined && this.contrasenna != undefined) {
      this.loginService.getContrasenna(this.email).subscribe(data => {
        console.log(data)
      })
    }
  }

}
