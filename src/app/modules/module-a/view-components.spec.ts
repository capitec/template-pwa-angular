import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponents } from './view-components';

describe('ViewComponents', () => {
  let component: ViewComponents;
  let fixture: ComponentFixture<ViewComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponents]
    });
    fixture = TestBed.createComponent(ViewComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
