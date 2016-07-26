"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app/app.component');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var routes_1 = require('./routes');
// Register providers for browser, this is mandatory.
var platform_browser_2 = require('angular2-modal/platform-browser');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, platform_browser_2.MODAL_BROWSER_PROVIDERS, platform_browser_1.Title, routes_1.appRouterProviders]);
//# sourceMappingURL=main.js.map