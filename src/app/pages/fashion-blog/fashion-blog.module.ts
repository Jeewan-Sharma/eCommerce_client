import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionBlogRoutingModule } from './fashion-blog-routing.module';
import { FashionBlogComponent } from './fashion-blog.component';

@NgModule({
  declarations: [FashionBlogComponent],
  imports: [CommonModule, FashionBlogRoutingModule],
})
export class FashionBlogModule {}
