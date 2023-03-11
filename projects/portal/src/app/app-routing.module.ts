import { LoginGuard } from './../../../digi-shared-lib/src/lib/modules/core/guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
