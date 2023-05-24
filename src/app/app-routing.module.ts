import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventAuthGuard } from './shared/guards/prevent-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [PreventAuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
