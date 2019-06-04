import { TestBed } from '@angular/core/testing';

import { SpokeSharedService } from './spoke-shared.service';

describe('SpokeSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpokeSharedService = TestBed.get(SpokeSharedService);
    expect(service).toBeTruthy();
  });
});
