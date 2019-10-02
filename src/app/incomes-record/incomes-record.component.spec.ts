import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesRecordComponent } from './incomes-record.component';

describe('IncomesRecordComponent', () => {
  let component: IncomesRecordComponent;
  let fixture: ComponentFixture<IncomesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
