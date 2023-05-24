import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, NavBarComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
