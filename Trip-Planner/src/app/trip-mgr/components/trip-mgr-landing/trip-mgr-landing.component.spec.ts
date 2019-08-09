import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMgrLandingComponent } from './trip-mgr-landing.component';

describe('TripMgrLandingComponent', () => {
  let component: TripMgrLandingComponent;
  let fixture: ComponentFixture<TripMgrLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMgrLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMgrLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
