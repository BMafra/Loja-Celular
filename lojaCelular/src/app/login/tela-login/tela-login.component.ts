import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from '../../services/usuarios.service';

import {
  GoogleLoginProvider,
  AuthService,
} from "angular-6-social-login-v2";


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private socialAuthService: AuthService
  ) { }

  user = '';
  password = '';

  ngOnInit() { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider; 
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.voltarHome();
      }
    );
  }

  verifica = 0;

  login() {
    this.usuariosService.buscarClientes()
      .then((resultado: any) => {
        console.log(resultado)
        for (let i = 0; i < resultado.length; i++) {
          if (resultado[i].SENHA === this.password && resultado[i].USER === this.user) {
            this.router.navigate(['carrinho']);
            break;
          } 
          if (i == resultado.length - 1){
            alert("Algo errado. Tente novamente!");
          }
        }
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS: ', erro);
      })   
  }

  voltarHome() {
    this.router.navigate(['']);
  }

  cadastro(){
    this.router.navigate(['cadastro']);
  }

}
