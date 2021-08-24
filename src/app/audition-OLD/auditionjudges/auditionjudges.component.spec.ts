import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionjudgesComponent } from './auditionjudges.component';

describe('AuditionjudgesComponent', () => {
  let component: AuditionjudgesComponent;
  let fixture: ComponentFixture<AuditionjudgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditionjudgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditionjudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
