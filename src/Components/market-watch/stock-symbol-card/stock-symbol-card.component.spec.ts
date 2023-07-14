import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSymbolCardComponent } from './stock-symbol-card.component';

describe('StockSymbolCardComponent', () => {
  let component: StockSymbolCardComponent;
  let fixture: ComponentFixture<StockSymbolCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockSymbolCardComponent]
    });
    fixture = TestBed.createComponent(StockSymbolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
