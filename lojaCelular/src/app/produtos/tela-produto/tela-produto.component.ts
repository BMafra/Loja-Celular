import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  index
  nome
  valor
  marca
  imagem

  ngOnInit() {
    this.index = this.router.url.substring(this.router.url.length - 1)

    this.usuariosService.buscarProdutos()
      .then((resultado: any) => {
        resultado.find(valor => {
          if (valor.CODIGO == this.index) {
            this.usuariosService.buscarMarca()
              .then((resultadoMarca: any) => {
                resultadoMarca.find(valorMarca => {
                  if (valorMarca.CODIGO == valor.MARCA_CODIGO) {
                    this.nome = valor.NOME
                    this.valor = valor.PRECO
                    this.imagem = valor.URL
                    this.marca = valorMarca.NOME
                  }
                })
              })
          }
        })
      })
  }

  carrinho() {
    this.router.navigate(['carrinho']);

  }

  login() {
    this.router.navigate(['login']);
  }

  voltarHome() {
    this.router.navigate(['']);
  }

}
