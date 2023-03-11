import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { DigiSharedLibComponent } from './digi-shared-lib.component';
import { SharedLibConfigService } from './modules';

@NgModule({
  declarations: [DigiSharedLibComponent],
  imports: [HttpClientModule, ToastrModule.forRoot()],
  exports: [DigiSharedLibComponent],
})
export class DigiSharedLibModule {
  public static forRoot(items: {
    role: string;
    storageKey: string;
  }): ModuleWithProviders<DigiSharedLibModule> {
    return {
      ngModule: DigiSharedLibModule,
      providers: [
        {
          provide: 'config',
          useFactory: SharedLibConfigService,
          useValue: items,
        },
      ],
    };
  }
}
