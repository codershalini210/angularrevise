import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownToEnd } from './countdown-to-end';

describe('CountdownToEnd', () => {
  let component: CountdownToEnd;
  let fixture: ComponentFixture<CountdownToEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownToEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownToEnd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
