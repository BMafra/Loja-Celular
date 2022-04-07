import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

    lista = []

  ngOnInit() {
    this.usuarioService.buscarProdutos()
    .then((resultado: any) => {
      resultado.find(valor => {
        if(valor.CARRINHO == 1){
          let produto = {
            nome: valor.NOME,
            valor: valor.VALOR,
            preco: valor.PRECO,
            imagem: valor.URL,
            marca: valor.MARCA
          }
          this.lista.push(produto) 
        }
      })
    })
  }

  voltarHome() {
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['login']);
  }

}
