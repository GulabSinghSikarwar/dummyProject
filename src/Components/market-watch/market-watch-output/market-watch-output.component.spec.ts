import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketWatchOutputComponent } from './market-watch-output.component';

describe('MarketWatchOutputComponent', () => {
  let component: MarketWatchOutputComponent;
  let fixture: ComponentFixture<MarketWatchOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketWatchOutputComponent]
    });
    fixture = TestBed.createComponent(MarketWatchOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
