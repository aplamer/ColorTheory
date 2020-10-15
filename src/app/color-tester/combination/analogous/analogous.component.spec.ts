import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogousComponent } from './analogous.component';

describe('AnalogousComponent', () => {
  let component: AnalogousComponent;
  let fixture: ComponentFixture<AnalogousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
