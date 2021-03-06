import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaleDropdownComponent } from './editable-dropdown.component';

describe('EditaleDropdownComponent', () => {
  let component: EditaleDropdownComponent;
  let fixture: ComponentFixture<EditaleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
