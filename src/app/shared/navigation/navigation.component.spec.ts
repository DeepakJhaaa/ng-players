import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {NavigationComponent} from './navigation.component';

let component: NavigationComponent;
let fixture: ComponentFixture<NavigationComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavigationComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
