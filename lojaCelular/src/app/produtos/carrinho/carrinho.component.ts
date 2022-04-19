import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @ViewChild('modal', {read: ElementRef})
  private modalComprar: ElementRef

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

    lista = []
    valorTotal = 20 

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
            marca: valor.MARCA,
            id: valor.CODIGO
          }
          this.lista.push(produto) 
        }
      })
      for(let i = 0; i < this.lista.length; i++){
        this.valorTotal += this.lista[i].preco;
      } 
    })
  }

  abrirModal(){
    const htmlElement: HTMLElement = this.modalComprar.nativeElement;
    htmlElement.classList.remove('close')
    htmlElement.classList.add('open')
  }

  fecharModal(){
    const htmlElement2: HTMLElement = this.modalComprar.nativeElement;
    htmlElement2.classList.remove('open')
    htmlElement2.classList.add('close')
  }

  removerCarrinho(id){
    this.usuarioService.removerCarrinho(id);
    document.location.reload();
  }

  voltarHome() {
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['login']);
  }

}
