import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBanner } from '../../components/main-banner/main-banner';
import { FeatureSection } from '../../components/feature-section/feature-section';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [
    CommonModule,
    MainBanner,
    FeatureSection,
    Cta
  ],
  templateUrl: './gym-flooring.html',
  styleUrl: './gym-flooring.css'
})
export class Flooring {

}