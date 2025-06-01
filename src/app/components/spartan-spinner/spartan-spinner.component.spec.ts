import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanSpinnerComponent } from './spartan-spinner.component';

describe('SpartanSpinnerComponent', () => {
  let component: SpartanSpinnerComponent;
  let fixture: ComponentFixture<SpartanSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartanSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
