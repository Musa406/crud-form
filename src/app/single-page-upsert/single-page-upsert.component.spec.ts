import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageUpsertComponent } from './single-page-upsert.component';

describe('SinglePageUpsertComponent', () => {
  let component: SinglePageUpsertComponent;
  let fixture: ComponentFixture<SinglePageUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
