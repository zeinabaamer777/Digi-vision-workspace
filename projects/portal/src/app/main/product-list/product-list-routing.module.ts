import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full',
  },

  {
    path: 'product-list',
    component: ProductListComponent,
  },

  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListRoutingModule {}
