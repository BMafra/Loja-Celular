import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  buscarClientes (){
    return new Promise((resolvido, rejeitado)=> {

      fetch('/api/cliente', {
        method:'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);

    })
  }

  buscarMarca (){
    return new Promise((resolvido, rejeitado)=> {

      fetch('/api/marca', {
        method:'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);

    })
  }
  

  buscarProdutos(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/ver_produtos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then (resultado => resultado.json())
        .then(resolvido => resolve(resolvido))
        .catch(rejeitado);
    })
  }

  adicionarCarrinho(id){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/adicionar_carrinho', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({id})
      }).then (resultado => resultado.json())
        .then(resolvido => resolve(resolvido))
        .catch(rejeitado);
    })
  }

  removerCarrinho(id){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/remover_carrinho', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({id})
      }).then (resultado => resultado.json())
        .then(resolvido => resolve(resolvido))
        .catch(rejeitado);
    })
  }

  cadastrar(USER, SENHA){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/cadastrar', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({USER, SENHA})
      }).then (resultado => resultado.json())
        .then(resolvido => resolve(resolvido))
        .catch(rejeitado);
    })
  }


}
