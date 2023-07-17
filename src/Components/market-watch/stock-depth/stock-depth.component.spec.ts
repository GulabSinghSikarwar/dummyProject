import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDepthComponent } from './stock-depth.component';

describe('StockDepthComponent', () => {
  let component: StockDepthComponent;
  let fixture: ComponentFixture<StockDepthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockDepthComponent]
    });
    fixture = TestBed.createComponent(StockDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
