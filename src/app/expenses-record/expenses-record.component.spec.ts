import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesRecordComponent } from './expenses-record.component';

describe('ExpensesRecordComponent', () => {
  let component: ExpensesRecordComponent;
  let fixture: ComponentFixture<ExpensesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
