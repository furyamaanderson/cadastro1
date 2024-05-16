import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { AuditarComponent } from './auditar/auditar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VisualizarComponent,
    AuditarComponent,
    NavbarComponent,
    FooterComponent,
    CadastroComponent,
    SidebarComponent,
    
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    VisualizarComponent,
    AuditarComponent,
    NavbarComponent,
    FooterComponent,
    CadastroComponent,
    SidebarComponent,
  ],
})
export class ModuleModule { }
