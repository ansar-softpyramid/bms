"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var items_component_1 = require('./items/items.component');
var item_detail_component_1 = require('./item-detail/item-detail.component');
exports.routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: dashboard_component_1.DashboardComponent,
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
    },
    {
        path: 'items',
        component: items_component_1.ItemsComponent
    },
    {
        path: 'item-detail',
        component: item_detail_component_1.ItemDetailComponent
    },
    {
        path: 'item-detail/:id',
        component: item_detail_component_1.ItemDetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map