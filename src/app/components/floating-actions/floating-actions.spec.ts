import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingActions } from './floating-actions';

describe('FloatingActions', () => {
  let component: FloatingActions;
  let fixture: ComponentFixture<FloatingActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
