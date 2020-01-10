import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutoCompleteFieldComponent } from './form-auto-complete-field.component';

describe('FormAutoCompleteFieldComponent', () => {
  let component: FormAutoCompleteFieldComponent;
  let fixture: ComponentFixture<FormAutoCompleteFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAutoCompleteFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAutoCompleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
