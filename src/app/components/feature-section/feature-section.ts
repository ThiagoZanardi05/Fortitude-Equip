import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './feature-section.html',
  styleUrl: './feature-section.css'
})
export class FeatureSection {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = '';
  @Input() imageUrl: string = '';

  isDetailsVisible = false;

  toggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
  }
}