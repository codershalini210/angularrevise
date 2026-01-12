import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timernew } from './timernew';

describe('Timernew', () => {
  let component: Timernew;
  let fixture: ComponentFixture<Timernew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timernew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timernew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
