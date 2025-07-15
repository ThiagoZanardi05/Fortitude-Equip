import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component'; // <-- NOME CORRIGIDO AQUI
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { InnovativeProductComponent } from '../../components/innovative-product/innovative-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent, // <-- NOME CORRIGIDO AQUI
    GalleryComponent,
    InnovativeProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}