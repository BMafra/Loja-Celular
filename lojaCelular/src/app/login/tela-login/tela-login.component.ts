import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.buscarUsurios()
    .then(resultado => {
      console.log('RESULTADO:', resultado);
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIOS: ', erro);
    })
  }

  login(){
    this.router.navigate(['carrinho']);
  
  }

  voltarHome() {
    this.router.navigate(['']);
  }

}
