import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorWheelComponent } from './color-wheel.component';

describe('ColorWheelComponent', () => {
  let component: ColorWheelComponent;
  let fixture: ComponentFixture<ColorWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
