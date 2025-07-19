import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBanner } from '../../components/main-banner/main-banner'; // Importamos o banner
import { ServicesSection } from '../../components/services-section/services-section';
import { Gallery } from '../../components/gallery/gallery';
import { InnovativeProduct } from '../../components/innovative-product/innovative-product';
import { FeatureSection } from '../../components/feature-section/feature-section';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FeatureSection,
    MainBanner, 
    ServicesSection,
    Cta,
    Gallery,
    InnovativeProduct
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}