import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ListPlayersComponent } from './list-players.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Player } from '../common/player.model';
import { PlayersService } from '../common/players.service';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { OrderBy } from '../common/players.pipes';
import {
  HttpModule,
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';
import { NouisliderModule } from 'ng2-nouislider';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

let component: ListPlayersComponent;
let fixture: ComponentFixture<ListPlayersComponent>;

describe(__filename, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NouisliderModule,
        ModalModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule
      ],
      declarations: [
        ListPlayersComponent,
        AddPlayerComponent,
        EditPlayerComponent,
        OrderBy
      ],
      providers: [PlayersService, BsModalService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPlayersComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
