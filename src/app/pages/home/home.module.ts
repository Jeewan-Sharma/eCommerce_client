import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
//
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

//
import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, HomeRoutingModule, NgbCarouselModule],
})
export class HomeModule {}
