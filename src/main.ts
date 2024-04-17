import { environment } from '../environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// Register Syncfusion license directly
(window as any).SyncfusionLicense =
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVFpR2Nbe051flBCalhRVBYiSV9jS3pTdUVgWHhbdHBUQGVZWQ==';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
