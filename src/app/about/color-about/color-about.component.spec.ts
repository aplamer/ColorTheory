import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAboutComponent } from './color-about.component';

describe('ColorAboutComponent', () => {
  let component: ColorAboutComponent;
  let fixture: ComponentFixture<ColorAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
