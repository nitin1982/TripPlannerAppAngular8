import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStayComponent } from './save-stay.component';

describe('SaveStayComponent', () => {
  let component: SaveStayComponent;
  let fixture: ComponentFixture<SaveStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
