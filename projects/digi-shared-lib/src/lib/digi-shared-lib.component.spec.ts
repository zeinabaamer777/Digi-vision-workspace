import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiSharedLibComponent } from './digi-shared-lib.component';

describe('DigiSharedLibComponent', () => {
  let component: DigiSharedLibComponent;
  let fixture: ComponentFixture<DigiSharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiSharedLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
