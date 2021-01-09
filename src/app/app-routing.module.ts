import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    // canLoad : [AuthorizationGuard],
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./features/menu/menu.module').then((m) => m.MenuModule),
  },

  {
    path: 'cgu',
    loadChildren: () =>
      import('./features/cgu/cgu.module').then((m) => m.CguModule),
  },
  {
    path: 'cgv',
    loadChildren: () =>
      import('./features/cgv/cgv.module').then((m) => m.CgvModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/not-found',
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }