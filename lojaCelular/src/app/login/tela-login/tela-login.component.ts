import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltarHome() {
    this.router.navigate(['']);
  }

}
