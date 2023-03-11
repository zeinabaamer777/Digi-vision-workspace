/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedLibConfigService } from './shared-lib-config.service';

describe('Service: SharedLibConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedLibConfigService]
    });
  });

  it('should ...', inject([SharedLibConfigService], (service: SharedLibConfigService) => {
    expect(service).toBeTruthy();
  }));
});
