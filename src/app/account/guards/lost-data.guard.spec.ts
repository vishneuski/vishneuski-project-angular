import { TestBed, async, inject } from '@angular/core/testing';

import { LostDataGuard } from './lost-data.guard';

describe('LostDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LostDataGuard]
    });
  });

  it('should ...', inject([LostDataGuard], (guard: LostDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
