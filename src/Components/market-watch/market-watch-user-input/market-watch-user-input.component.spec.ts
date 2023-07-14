import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketWatchUserInputComponent } from './market-watch-user-input.component';

describe('MarketWatchUserInputComponent', () => {
  let component: MarketWatchUserInputComponent;
  let fixture: ComponentFixture<MarketWatchUserInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketWatchUserInputComponent]
    });
    fixture = TestBed.createComponent(MarketWatchUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
