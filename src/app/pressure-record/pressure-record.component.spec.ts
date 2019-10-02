import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureRecordComponent } from './pressure-record.component';

describe('PressureRecordComponent', () => {
  let component: PressureRecordComponent;
  let fixture: ComponentFixture<PressureRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
