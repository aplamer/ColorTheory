import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSymbolismComponent } from './color-symbolism.component';

describe('ColorSymbolismComponent', () => {
  let component: ColorSymbolismComponent;
  let fixture: ComponentFixture<ColorSymbolismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSymbolismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSymbolismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
