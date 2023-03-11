import { TestBed } from '@angular/core/testing';

import { DigiSharedLibService } from './digi-shared-lib.service';

describe('DigiSharedLibService', () => {
  let service: DigiSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
