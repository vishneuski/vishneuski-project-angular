import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWineViewComponent } from './list-wine-view.component';

describe('ListWineViewComponent', () => {
  let component: ListWineViewComponent;
  let fixture: ComponentFixture<ListWineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
