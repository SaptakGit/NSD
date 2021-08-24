import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionfooterComponent } from './auditionfooter.component';

describe('AuditionfooterComponent', () => {
  let component: AuditionfooterComponent;
  let fixture: ComponentFixture<AuditionfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditionfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditionfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
