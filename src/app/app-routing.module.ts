import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuditarComponent } from './components/auditar/auditar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  {path: 'cadastro', component: CadastroComponent },
  {path: 'auditar', component: AuditarComponent },
  {path: 'visualizar', component: VisualizarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
