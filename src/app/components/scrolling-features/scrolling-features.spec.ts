import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingFeatures } from './scrolling-features';

describe('ScrollingFeatures', () => {
  let component: ScrollingFeatures;
  let fixture: ComponentFixture<ScrollingFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
