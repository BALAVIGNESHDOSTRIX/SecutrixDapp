import { TestBed, async, inject } from '@angular/core/testing';

import { SecutrixGaurdGuard } from './secutrix-gaurd.guard';

describe('SecutrixGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecutrixGaurdGuard]
    });
  });

  it('should ...', inject([SecutrixGaurdGuard], (guard: SecutrixGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
