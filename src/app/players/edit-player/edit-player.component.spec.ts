import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EditPlayerComponent } from './edit-player.component';
import { PlayersService } from '../common/players.service';

let component: EditPlayerComponent;
let fixture: ComponentFixture<EditPlayerComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, FormsModule],
      declarations: [EditPlayerComponent],
      providers: [PlayersService]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPlayerComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
