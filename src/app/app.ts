// src/app/app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'; // Corrigido
import { Footer } from './components/footer/footer'; // Corrigido

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header, // Corrigido
    Footer  // Corrigido
  ],
  templateUrl: './app.html', // Corrigido
  styleUrl: './app.css'     // Corrigido
})
export class App { // Corrigido para corresponder ao seu main.ts e app.spec.ts
  title = 'Fortitudeequip';
}