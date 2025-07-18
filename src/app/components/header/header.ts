import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common'; // Importe o NgClass

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgClass], // Adicione NgClass aos imports
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isMobileMenuOpen = false;
  openMobileSubMenu: string | null = null; // Controla qual sub-menu está aberto

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Se fechar o menu principal, também fecha qualquer sub-menu aberto
    if (!this.isMobileMenuOpen) {
      this.openMobileSubMenu = null;
    }
  }

  toggleSubMenu(menu: string) {
    if (this.openMobileSubMenu === menu) {
      this.openMobileSubMenu = null; // Se o menu já está aberto, fecha-o
    } else {
      this.openMobileSubMenu = menu; // Se não, abre o menu clicado
    }
  }
}