import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriadComponent } from './triad.component';

describe('TriadComponent', () => {
  let component: TriadComponent;
  let fixture: ComponentFixture<TriadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
