import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class UiComponentsModule {}
