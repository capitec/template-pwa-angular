import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForm } from './view-form';

describe('ViewForm', () => {
  let component: ViewForm;
  let fixture: ComponentFixture<ViewForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewForm]
    });
    fixture = TestBed.createComponent(ViewForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
