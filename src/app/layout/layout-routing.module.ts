import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('../pages/sale/sale.module').then((m) => m.SaleModule),
      },
      {
        path: 'featured',
        loadChildren: () =>
          import('../pages/featured/featured.module').then(
            (m) => m.FeaturedModule
          ),
      },
      {
        path: 'fashion-blog',
        loadChildren: () =>
          import('../pages/fashion-blog/fashion-blog.module').then(
            (m) => m.FashionBlogModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
