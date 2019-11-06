import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWineViewComponent } from './edit-wine-view.component';

describe('EditWineViewComponent', () => {
  let component: EditWineViewComponent;
  let fixture: ComponentFixture<EditWineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
