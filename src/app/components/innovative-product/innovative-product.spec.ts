import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovativeProduct } from './innovative-product';

describe('InnovativeProduct', () => {
  let component: InnovativeProduct;
  let fixture: ComponentFixture<InnovativeProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovativeProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovativeProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
