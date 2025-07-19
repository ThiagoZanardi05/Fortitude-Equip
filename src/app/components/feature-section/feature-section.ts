import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.html',
  styleUrl: './feature-section.css'
})
export class FeatureSection {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = '';
  @Input() imageUrl: string = '';
}