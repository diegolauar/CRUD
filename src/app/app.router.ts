import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const ROTAS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'cadastro-produto', component: CadastroProdutoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROTAS);