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

  
}
