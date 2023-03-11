import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'projects/digi-shared-lib/src/lib/modules/material/material.module';

import { PipesModule } from 'projects/digi-shared-lib/src/lib/modules/core/pipes/pipes.module';
import {
  AddProductComponent,
  DeleteProductComponent,
  ProductsListComponent,
  EditProductComponent,
} from './pages';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENETS = [
  ProductsListComponent,
  AddProductComponent,
  EditProductComponent,
  DeleteProductComponent,
];

@NgModule({
  declarations: [...COMPONENETS],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    CommonModule,
    PipesModule,
  ],
})
export class ProductsModule {}
