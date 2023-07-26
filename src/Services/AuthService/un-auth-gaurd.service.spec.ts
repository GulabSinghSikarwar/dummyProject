import { TestBed } from '@angular/core/testing';

import { UnAuthGaurdService } from './un-auth-gaurd.service';

describe('UnAuthGaurdService', () => {
  let service: UnAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
