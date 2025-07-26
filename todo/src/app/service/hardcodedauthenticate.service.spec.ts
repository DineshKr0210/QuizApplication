import { TestBed } from '@angular/core/testing';

import { HardcodedauthenticateService } from './hardcodedauthenticate.service';

describe('HardcodedauthenticateService', () => {
  let service: HardcodedauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
