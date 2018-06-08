import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';

let component: AboutComponent;
let fixture: ComponentFixture<AboutComponent>;

describe(__filename, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AboutComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the About Component Correctly', () => {
    expect(component).toBeTruthy();
  });
});
