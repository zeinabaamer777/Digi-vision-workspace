import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './admin-routing.module';
import { MainComponent } from './admin.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class AdminModule {}
