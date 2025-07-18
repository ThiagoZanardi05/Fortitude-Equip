import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFlooring } from './gym-flooring';

describe('GymFlooring', () => {
  let component: GymFlooring;
  let fixture: ComponentFixture<GymFlooring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymFlooring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymFlooring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
