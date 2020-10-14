import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasternComponent } from './eastern.component';

describe('EasternComponent', () => {
  let component: EasternComponent;
  let fixture: ComponentFixture<EasternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
