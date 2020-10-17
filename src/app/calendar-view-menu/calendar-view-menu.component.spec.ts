import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewMenuComponent } from './calendar-view-menu.component';

describe('CalendarViewMenuComponent', () => {
  let component: CalendarViewMenuComponent;
  let fixture: ComponentFixture<CalendarViewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarViewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
