import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionBlogComponent } from './fashion-blog.component';

const routes: Routes = [
  {
    path: '',
    component: FashionBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FashionBlogRoutingModule {}
