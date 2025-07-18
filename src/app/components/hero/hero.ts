import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true, // Adicionado
  imports: [CommonModule], // Adicionado
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}