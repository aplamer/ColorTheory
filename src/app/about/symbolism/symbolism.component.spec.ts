import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolismComponent } from './symbolism.component';

describe('SymbolismComponent', () => {
  let component: SymbolismComponent;
  let fixture: ComponentFixture<SymbolismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
