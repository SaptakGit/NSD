import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionFormComponent } from './audition-form.component';

describe('AuditionFormComponent', () => {
  let component: AuditionFormComponent;
  let fixture: ComponentFixture<AuditionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
