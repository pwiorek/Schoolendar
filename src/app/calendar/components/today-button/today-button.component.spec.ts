import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayButtonComponent } from './today-button.component';

describe('TodayButtonComponent', () => {
  let component: TodayButtonComponent;
  let fixture: ComponentFixture<TodayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
