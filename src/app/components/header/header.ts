import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, // Adicionado
  imports: [CommonModule], // Adicionado para diretivas
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}