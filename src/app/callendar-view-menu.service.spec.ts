import { TestBed } from '@angular/core/testing';

import { CallendarViewMenuService } from './callendar-view-menu.service';

describe('CallendarViewMenuService', () => {
  let service: CallendarViewMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallendarViewMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
