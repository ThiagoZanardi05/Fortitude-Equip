import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { InnovativeProductComponent } from '../../components/innovative-product/innovative-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // Adicionamos todas as seções que a Home vai usar
  imports: [
    HeroComponent,
    ServicesSectionComponent,
    GalleryComponent,
    InnovativeProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}