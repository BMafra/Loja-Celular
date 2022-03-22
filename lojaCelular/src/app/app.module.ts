import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';
import { HomeComponent } from './produtos/home/home.component';
import { TelaProdutoComponent } from './produtos/tela-produto/tela-produto.component';

// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider
// } from "angular-6-social-login";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'produto/:id_produto', component: TelaProdutoComponent}
]


// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//     [
//       {
//         id: GoogleLoginProvider.PROVIDER_ID,
//         provider: new GoogleLoginProvider("402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com")
//       },
//     ]
//   );
//   return config;
// }



@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CarrinhoComponent,
    HomeComponent,
    TelaProdutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    // SocialLoginModule
  ],
  providers: [
    // {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
