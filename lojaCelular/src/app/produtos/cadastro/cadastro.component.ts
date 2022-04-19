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
  nome = "";
  email = "";
  codigo_endereco = "";
  pais = "";
  cidade = "";
  estado = "";
  bairro = "";
  numero = "";

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {

  }

  cadastro() {
    this.usuariosService.checarEndereco().then((result: any) => {
      console.log(result.length);
      this.codigo_endereco = result.length;
    })
      this.usuariosService.endereco(this.pais, this.estado, this.cidade, this.bairro, this.numero);
      this.usuariosService.cadastrar(this.nome, this.user, this.email, this.senha, this.codigo_endereco);
      this.router.navigate(["/login"]);
  }

  // cadastrar(){
  //   this.usuariosService.cadastrar(this.nome, this.user, this.email, this.senha, this.codigo_endereco);
  //   this.voltarLogin();
  // }

  voltarHome(){
    this.router.navigate([''])
  }

  voltarLogin(){
    this.router.navigate(['login'])
  }

}
