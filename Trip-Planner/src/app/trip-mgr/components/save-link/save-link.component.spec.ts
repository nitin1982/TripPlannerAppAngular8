import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLinkComponent } from './save-link.component';

describe('SaveLinkComponent', () => {
  let component: SaveLinkComponent;
  let fixture: ComponentFixture<SaveLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
