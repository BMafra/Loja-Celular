import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  carrinho(){
    this.router.navigate(['carrinho']);
  }

  login(){
    this.router.navigate(['login']);
  }

}
