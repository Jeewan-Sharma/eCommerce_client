import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionBlogRoutingModule } from './fashion-blog-routing.module';
import { FashionBlogComponent } from './fashion-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FashionBlogComponent],
  imports: [CommonModule, FashionBlogRoutingModule, SharedModule],
})
export class FashionBlogModule {}
