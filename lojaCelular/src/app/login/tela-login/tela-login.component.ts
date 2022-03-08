import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from '../../services/usuarios.service';

// import {
//   AuthService,
//   GoogleLoginProvider
// } from 'angular-6-social-login';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    // private socialAuthService: AuthService
  ) { }

  user = '';
  password = '';

  ngOnInit() { }

  // public socialSignIn(socialPlatform : string) {
  //   let socialPlatformProvider;
  //   if(socialPlatform == "google"){
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
    
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform+" sign in data : " , userData);
  //       this.router.navigate([''])
  //     }
  //   );

  // }

  login() {
    this.usuariosService.buscarClientes()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          if (resultado[i].SENHA === this.password && resultado[i].USER === this.user) {
            this.router.navigate(['carrinho']);
          }
        }
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS: ', erro);
      })

  }
  voltarHome() {
    this.router.navigate(['']);
  }

}
