import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBanner } from '../../components/main-banner/main-banner';
import { FeatureSection } from '../../components/feature-section/feature-section';
import { TilesFeaturesGrid } from '../../components/tiles-features-grid/tiles-features-grid';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [
    CommonModule,
    MainBanner,
    FeatureSection,
    TilesFeaturesGrid,
    Cta
  ],
  templateUrl: './flooring.html',
  styleUrl: './flooring.css'
})
export class Flooring {

}