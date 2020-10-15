import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonochromaticComponent } from './monochromatic.component';

describe('MonochromaticComponent', () => {
  let component: MonochromaticComponent;
  let fixture: ComponentFixture<MonochromaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonochromaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonochromaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
