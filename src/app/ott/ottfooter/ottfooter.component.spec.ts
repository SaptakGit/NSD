import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttfooterComponent } from './ottfooter.component';

describe('OttfooterComponent', () => {
  let component: OttfooterComponent;
  let fixture: ComponentFixture<OttfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
