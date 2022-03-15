import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProduto = [ ]
 
  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.buscarProdutos()
    .then((resultado: any) => {
      console.log(" WRGESVDAXZ",resultado)
    })
    .then((resultado: any) => {
      console.log("aaaa",resultado)
      resultado.find(valorResultado => {
        this.listaProduto.push(valorResultado)
      })
    })

    console.log(this.listaProduto)

  }

  carrinho(){
    this.router.navigate(['carrinho']);
  }

  login(){
    this.router.navigate(['login']);
  }

}
