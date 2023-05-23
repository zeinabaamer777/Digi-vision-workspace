// loader.component.ts

import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
