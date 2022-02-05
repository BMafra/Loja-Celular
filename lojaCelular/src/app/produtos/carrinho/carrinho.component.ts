import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltarHome() {
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['login']);
  }

}
