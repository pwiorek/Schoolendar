import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePeriodControlerComponent } from './time-period-controler.component';

describe('TimePeriodControlerComponent', () => {
  let component: TimePeriodControlerComponent;
  let fixture: ComponentFixture<TimePeriodControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePeriodControlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePeriodControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
