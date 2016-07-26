import { provideRouter, RouterConfig} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

export const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'prefix', //default route
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'item-detail',
    component: ItemDetailComponent
  },
  {
    path: 'item-detail/:id',
    component: ItemDetailComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];