import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flooring } from './flooring';

describe('Flooring', () => {
  let component: Flooring;
  let fixture: ComponentFixture<Flooring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flooring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flooring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
