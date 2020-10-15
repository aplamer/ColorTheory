import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleComplementaryComponent } from './double-complementary.component';

describe('DoubleComplementaryComponent', () => {
  let component: DoubleComplementaryComponent;
  let fixture: ComponentFixture<DoubleComplementaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleComplementaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleComplementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
