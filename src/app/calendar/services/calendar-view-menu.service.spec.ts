import { TestBed } from '@angular/core/testing';

import { CalendarViewMenuService } from './calendar-view-menu.service';

describe('CalendarViewMenuService', () => {
  let service: CalendarViewMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarViewMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
