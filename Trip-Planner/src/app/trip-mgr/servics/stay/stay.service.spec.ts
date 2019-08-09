import { TestBed } from '@angular/core/testing';

import { StayService } from './stay.service';

describe('StayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StayService = TestBed.get(StayService);
    expect(service).toBeTruthy();
  });
});
