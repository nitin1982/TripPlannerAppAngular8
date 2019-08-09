import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDocumentComponent } from './save-document.component';

describe('SaveDocumentComponent', () => {
  let component: SaveDocumentComponent;
  let fixture: ComponentFixture<SaveDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
