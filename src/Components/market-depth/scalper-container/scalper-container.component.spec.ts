import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalperContainerComponent } from './scalper-container.component';

describe('ScalperContainerComponent', () => {
  let component: ScalperContainerComponent;
  let fixture: ComponentFixture<ScalperContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScalperContainerComponent]
    });
    fixture = TestBed.createComponent(ScalperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
