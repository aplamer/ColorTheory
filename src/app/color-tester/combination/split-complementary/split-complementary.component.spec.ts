import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitComplementaryComponent } from './split-complementary.component';

describe('SplitComplementaryComponent', () => {
  let component: SplitComplementaryComponent;
  let fixture: ComponentFixture<SplitComplementaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitComplementaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitComplementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
