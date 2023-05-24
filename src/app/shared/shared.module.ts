import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleHeaderComponent } from './components/sale-header/sale-header.component';

@NgModule({
  declarations: [SaleHeaderComponent],
  imports: [CommonModule],
  exports: [SaleHeaderComponent],
})
export class SharedModule {}
