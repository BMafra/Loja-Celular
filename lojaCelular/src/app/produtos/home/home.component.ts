import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nome = ''
  preco = '';
  imagem = '';

  listaProduto = [];
 
  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.buscarProdutos()
    .then((resultado: any) => {
      for(let i = 0; i < resultado.length; i++){
        let teste = {
          nome: resultado[i].NOME,
          preco: resultado[i].PRECO,
          imagem: resultado[i].URL
        }
        console.log("teste: ", teste)
        this.listaProduto.push(teste);
      }
    })

  }

  adicionarCarrinho(id){
    this.usuariosService.adicionarCarrinho(id)
    this.router.navigate(['carrinho']);
  }

  carrinho(){
    this.router.navigate(['carrinho']);
  }

  login(){
    this.router.navigate(['login']);
  }

  verProduto(i){
    this.router.navigate(['produto', i]);
  }

}
