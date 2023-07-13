import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthContainerComponent } from './depth-container.component';

describe('DepthContainerComponent', () => {
  let component: DepthContainerComponent;
  let fixture: ComponentFixture<DepthContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepthContainerComponent]
    });
    fixture = TestBed.createComponent(DepthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
