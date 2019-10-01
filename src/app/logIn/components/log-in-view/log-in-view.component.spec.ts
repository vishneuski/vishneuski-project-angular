import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInViewComponent } from './log-in-view.component';

describe('LogInViewComponent', () => {
  let component: LogInViewComponent;
  let fixture: ComponentFixture<LogInViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
