import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true, // Adicionado
  imports: [CommonModule], // Adicionado
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSection {

}
