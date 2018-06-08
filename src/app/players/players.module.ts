import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { routing } from './players.router';
import { SharedModule } from '../shared/shared.module';
import { PlayersComponent } from './players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { PlayersService } from './common/players.service';
import { OrderBy } from './common/players.pipes';
import { MinMaxFilter } from './common/players.pipes';
import { NouisliderModule } from 'ng2-nouislider';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    PlayersComponent,
    AddPlayerComponent,
    ListPlayersComponent,
    EditPlayerComponent,
    OrderBy,
    MinMaxFilter
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    routing,
    NgxPaginationModule,
    NouisliderModule,
    ModalModule.forRoot()
  ],
  providers: [PlayersService],
  bootstrap: [PlayersComponent]
})
export class PlayersModule {}
