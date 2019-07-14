import { TestBed } from '@angular/core/testing';

import { RouterGuardService } from './router-guard.service';

describe('RouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterGuardService = TestBed.get(RouterGuardService);
    expect(service).toBeTruthy();
  });
});
