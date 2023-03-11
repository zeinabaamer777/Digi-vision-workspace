import { TruncatePipe } from './truncate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const PIPES = [TruncatePipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...PIPES],
  exports: [...PIPES],
  providers: [...PIPES],
})
export class PipesModule {}
