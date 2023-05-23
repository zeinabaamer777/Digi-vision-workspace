import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginGuard } from './core';

const routes: Routes = [
  {
    path: '/admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },

  {
    path: '/user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },

  {
    path: 'login',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),

    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
