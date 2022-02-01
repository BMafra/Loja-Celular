import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, TelaProdutoComponent, CarrinhoComponent]
})
export class ProdutosModule { }
