import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DigiSharedLibModule,
  LoaderInterceptor,
} from '../../../digi-shared-lib/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UiComponentsModule } from '../../../digi-shared-lib/src/lib/modules/ui-components/ui-components.module';
import { MaterialModule } from 'projects/digi-shared-lib/src/lib/modules/material/material.module';

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient],
    //   },
    // }),
    DigiSharedLibModule.forRoot({ role: 'admin', storageKey: 'admin' }),
    UiComponentsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
})
export class AppModule {}
