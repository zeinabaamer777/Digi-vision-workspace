import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { MaterialModule } from 'projects/digi-shared-lib/src/lib/modules/material/material.module';
import {
  ProductCardComponent,
  ProductDetailsComponent,
  ProductListComponent,
} from './pages';
import { PipesModule } from 'projects/digi-shared-lib/src/lib/modules/core/pipes/pipes.module';

const COMPONENETS = [
  ProductListComponent,
  ProductCardComponent,
  ProductDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENETS],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
    CommonModule,
    PipesModule,
  ],
})
export class ProductListModule {}
