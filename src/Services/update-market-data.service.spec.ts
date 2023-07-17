import { TestBed } from '@angular/core/testing';

import { UpdateMarketDataService } from './update-market-data.service';

describe('UpdateMarketDataService', () => {
  let service: UpdateMarketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMarketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
