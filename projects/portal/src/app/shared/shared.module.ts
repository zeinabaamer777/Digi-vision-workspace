import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from './ui-components';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule, UiComponentsModule, MaterialModule],
  declarations: [],
  exports: [UiComponentsModule, MaterialModule],
})
export class SharedModule {}
