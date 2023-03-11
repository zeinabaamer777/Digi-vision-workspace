import { AuthGuard } from './../../../digi-shared-lib/src/lib/modules/core/guards/auth.guard';
import { LoginGuard } from './../../../digi-shared-lib/src/lib/modules/core/guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('../../../digi-shared-lib/src/lib/modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),

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
