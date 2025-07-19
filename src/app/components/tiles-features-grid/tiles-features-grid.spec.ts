import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesFeaturesGrid } from './tiles-features-grid';

describe('TilesFeaturesGrid', () => {
  let component: TilesFeaturesGrid;
  let fixture: ComponentFixture<TilesFeaturesGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilesFeaturesGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesFeaturesGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
