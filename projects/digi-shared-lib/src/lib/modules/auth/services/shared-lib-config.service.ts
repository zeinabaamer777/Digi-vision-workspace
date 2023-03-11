import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedLibConfigService {
  configuration: any;

  constructor(@Inject('config') private config: any) {
    this.configuration = config;
  }
}
