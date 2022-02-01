import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { TelaProdutoComponent } from './produtos/tela-produto/tela-produto.component';
import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';
import { HomeComponent } from './produtos/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaProdutoComponent,
    CarrinhoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
