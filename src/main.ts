import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ContactService } from './app/services/contact.service';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, ContactService, disableDeprecatedForms(), provideForms()]) 
          .catch((err: any) => console.error(err));

