import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingFeatures } from '../../components/scrolling-features/scrolling-features';
import { FeatureSection } from '../../components/feature-section/feature-section';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingFeatures, // Importa o novo wrapper
    FeatureSection     // Importa o card animado
  ],
  templateUrl: './flooring.html',
  styleUrl: './flooring.css'
})
export class Flooring {

}