import { ArquivoCadastroComponent } from './arquivos/arquivo-cadastro/arquivo-cadastro.component';
import { ArquivoListagemComponent } from './arquivos/arquivo-listagem/arquivo-listagem.component';
import { MegaCadastroComponent } from './mega/mega-cadastro/mega-cadastro.component';
import { MegaListagemComponent } from './mega/mega-listagem/mega-listagem.component';
import { AutoresCadastroComponent } from './autores/autores-cadastro/autores-cadastro.component';
import { AutoresListagemComponent } from './autores/autores-listagem/autores-listagem.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listagem-autores', component: AutoresListagemComponent },
    { path: 'cadastro-autores', component: AutoresCadastroComponent },
    { path: 'cadastro-autores/:id', component: AutoresCadastroComponent },
    { path: 'listagem-mega', component: MegaListagemComponent },
    { path: 'cadastro-mega', component: MegaCadastroComponent },
    { path: 'cadastro-mega/:id', component: MegaCadastroComponent },
    { path: 'listagem-arquivo', component: ArquivoListagemComponent },
    { path: 'cadastro-arquivo', component: ArquivoCadastroComponent },
    { path: 'cadastro-arquivo/:id', component: ArquivoCadastroComponent }
];

export const routes = RouterModule.forRoot(appRoutes, { useHash: false });