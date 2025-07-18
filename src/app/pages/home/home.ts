import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBanner } from '../../components/main-banner/main-banner'; // Importamos o banner
import { ServicesSection } from '../../components/services-section/services-section';
import { Gallery } from '../../components/gallery/gallery';
import { InnovativeProduct } from '../../components/innovative-product/innovative-product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainBanner, // Dizemos ao Home que o Banner será usado aqui
    ServicesSection,
    Gallery,
    InnovativeProduct
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}