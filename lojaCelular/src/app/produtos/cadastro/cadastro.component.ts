import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user = "";
  senha = "";

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {

  }

  cadastrar(){
    this.usuariosService.cadastrar(this.user, this.senha)
    this.voltarLogin();
  }

  voltarHome(){
    this.router.navigate([''])
  }

  voltarLogin(){
    this.router.navigate(['login'])
  }

}
