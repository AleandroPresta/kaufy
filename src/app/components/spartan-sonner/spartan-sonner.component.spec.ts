import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanSonnerComponent } from './spartan-sonner.component';

describe('SpartanSonnerComponent', () => {
  let component: SpartanSonnerComponent;
  let fixture: ComponentFixture<SpartanSonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanSonnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartanSonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
