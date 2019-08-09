import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLinksComponent } from './view-links.component';

describe('ViewLinksComponent', () => {
  let component: ViewLinksComponent;
  let fixture: ComponentFixture<ViewLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
