import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleHeaderComponent } from './components/sale-header/sale-header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';

@NgModule({
  declarations: [
    SaleHeaderComponent,
    ProductCardComponent,
    UnderDevelopmentComponent,
  ],
  imports: [CommonModule],
  exports: [
    SaleHeaderComponent,
    ProductCardComponent,
    UnderDevelopmentComponent,
  ],
})
export class SharedModule {}
