import { TestBed } from '@angular/core/testing';

import { StockRouteService } from './stock-route.service';

describe('StockRouteService', () => {
  let service: StockRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
