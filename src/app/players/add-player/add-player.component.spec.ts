import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AddPlayerComponent } from './add-player.component';
import { PlayersService } from '../common/players.service';

let component: AddPlayerComponent;
let fixture: ComponentFixture<AddPlayerComponent>;

describe(__filename, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [AddPlayerComponent],
      providers: [PlayersService]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create a FormGroup comprised of `FormControl`s', () => {
    expect(component._fb instanceof FormBuilder).toBe(true);
  });
});
