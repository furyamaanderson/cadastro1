import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  conteudoVisivel: boolean = false;
  conteudoVisivel2: boolean = true;

  trocarConteudo() {
    this.conteudoVisivel = !this.conteudoVisivel;
    this.conteudoVisivel2 = !this.conteudoVisivel2;
  }

  
}
