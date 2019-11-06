import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineViewComponent } from './add-wine-view.component';

describe('AddWineViewComponent', () => {
  let component: AddWineViewComponent;
  let fixture: ComponentFixture<AddWineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
