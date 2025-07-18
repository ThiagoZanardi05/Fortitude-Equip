// src/app/pages/home/home.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicionado para diretivas como *ngIf
import { Hero } from '../../components/hero/hero'; // Corrigido
import { ServicesSection } from '../../components/services-section/services-section'; // Corrigido
import { Gallery } from '../../components/gallery/gallery'; // Corrigido
import { InnovativeProduct } from '../../components/innovative-product/innovative-product'; // Corrigido

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    ServicesSection,
    Gallery,
    InnovativeProduct
  ],
  templateUrl: './home.html', // Corrigido
  styleUrl: './home.css'      // Corrigido
})
export class Home { // Corrigido

}