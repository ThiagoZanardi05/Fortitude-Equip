import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, // Adicionado
  imports: [CommonModule], // Adicionado
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}