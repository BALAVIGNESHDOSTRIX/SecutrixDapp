import { TestBed } from '@angular/core/testing';

import { SecutrixService } from './secutrix.service';

describe('SecutrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecutrixService = TestBed.get(SecutrixService);
    expect(service).toBeTruthy();
  });
});
