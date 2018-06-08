import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'players', loadChildren: './players/players.module#PlayersModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
