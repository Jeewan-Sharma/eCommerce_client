import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SaleComponent],
  imports: [CommonModule, SaleRoutingModule, SharedModule],
})
export class SaleModule {}
