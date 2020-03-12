import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalPeriodsComponent } from './operational-periods.component';

describe('OperationalPeriodsComponent', () => {
  let component: OperationalPeriodsComponent;
  let fixture: ComponentFixture<OperationalPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
