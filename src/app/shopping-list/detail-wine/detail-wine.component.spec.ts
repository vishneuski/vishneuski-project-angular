import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWineComponent } from './detail-wine.component';

describe('DetailWineComponent', () => {
  let component: DetailWineComponent;
  let fixture: ComponentFixture<DetailWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
