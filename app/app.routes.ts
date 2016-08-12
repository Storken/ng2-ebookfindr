import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './search-result.component';

const routes: RouterConfig = [
  {
    path: 'search',
    component: SearchResultComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
