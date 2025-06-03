import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanProductSkeletonComponent } from './spartan-product-skeleton.component';

describe('SpartanProductSkeletonComponent', () => {
  let component: SpartanProductSkeletonComponent;
  let fixture: ComponentFixture<SpartanProductSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanProductSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartanProductSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
