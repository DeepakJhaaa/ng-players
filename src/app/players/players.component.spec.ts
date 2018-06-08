import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlayersComponent } from './players.component';

let component: PlayersComponent;
let fixture: ComponentFixture<PlayersComponent>;

describe(__filename, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlayersComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
