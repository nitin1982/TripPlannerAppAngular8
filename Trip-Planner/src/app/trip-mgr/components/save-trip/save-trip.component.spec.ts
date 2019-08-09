import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTripComponent } from './save-trip.component';

describe('SaveTripComponent', () => {
  let component: SaveTripComponent;
  let fixture: ComponentFixture<SaveTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
