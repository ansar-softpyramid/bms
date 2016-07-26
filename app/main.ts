import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { appRouterProviders } from './routes';

// Register providers for browser, this is mandatory.
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';


bootstrap(AppComponent, [ HTTP_PROVIDERS, MODAL_BROWSER_PROVIDERS , Title, appRouterProviders]);
