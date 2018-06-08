import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AddPlayerComponent } from './add-player/add-player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Route[] = [
  {
    path: '',
    component: ListPlayersComponent,
    children: [
      { path: 'add', component: AddPlayerComponent },
      { path: ':id/edit', component: EditPlayerComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
